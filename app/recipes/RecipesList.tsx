'use client';

import RecipeItem from '@/app/recipes/RecipeItem';
import { Recipe } from '@/types';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const RecipesList = ({ recipes }: { recipes: Recipe[] }) => {
  // const recipes: Recipe[] = await getAllRecipes({});
  const searchParams = useSearchParams();

  // クライアントサイドでフィルタリング
  const filteredRecipes = useMemo(() => {
    const prepTime = searchParams.get('prepTime');
    const cookTime = searchParams.get('cookTime');
    const searchQuery = searchParams.get('q');

    return recipes.filter((recipe) => {
      // Prep Timeフィルタ
      if (prepTime && recipe.prepTime > parseInt(prepTime, 10)) {
        return false;
      }

      // Cook Timeフィルタ
      if (cookTime && recipe.cookTime > parseInt(cookTime, 10)) {
        return false;
      }

      // 検索クエリフィルタ
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const titleMatch = recipe.title.toLowerCase().includes(query);
        const overviewMatch = recipe.overview.toLowerCase().includes(query);
        if (!titleMatch && !overviewMatch) {
          return false;
        }
      }

      return true;
    });
  }, [recipes, searchParams]);

  return (
    <>
      {filteredRecipes.length > 0 ? (
        <ul className='grid gap-8 lg:grid-cols-2 xl:grid-cols-3'>
          {filteredRecipes.map((recipe) => (
            <RecipeItem key={recipe.slug.current} recipe={recipe} />
          ))}
        </ul>
      ) : (
        <p className='text-center py-8'>No recipes found.</p>
      )}
    </>
  );
};

export default RecipesList;
