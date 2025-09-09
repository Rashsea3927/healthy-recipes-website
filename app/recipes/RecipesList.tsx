import RecipeItem from '@/app/recipes/RecipeItem';
import { getAllRecipes } from '@/sanity/lib/query';
import { Recipe } from '@/types';

const RecipesList = async ({ prepTime, cookTime, q }: { prepTime?: number; cookTime?: number; q?: string }) => {
  const recipes: Recipe[] = await getAllRecipes({ prepTime, cookTime, q });

  return (
    <ul className='grid gap-8 lg:grid-cols-2 xl:grid-cols-3'>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.slug.current} recipe={recipe} />
      ))}
    </ul>
  );
};

export default RecipesList;
