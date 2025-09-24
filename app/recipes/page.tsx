import RecipesFilter from '@/app/recipes/RecipesFilter';
import RecipesHero from '@/app/recipes/RecipesHero';
import RecipesList from '@/app/recipes/RecipesList';
import { getAllRecipes } from '@/sanity/lib/query';
import { Recipe } from '@/types';
import { Suspense } from 'react';
import SkeletonFilter from './SkeletonFilter';
import SkeltonRecipesList from './SkeltonRecipesList';

export const metadata = {
  title: 'Recipes | Healthy Recipe Finder',
  description: 'Explore a variety of healthy recipes tailored to your preferences.',
};

const RecipesPage = async () => {
  const recipes: Recipe[] = await getAllRecipes({});

  return (
    <main className='pt-12 md:pt-16 lg:pt-20 lg:pb-24 lg:border-b lg:border-green-300 '>
      <div className='px-4 md:px-8 lg:max-w-(--container) lg:mx-auto xl:px-0'>
        <RecipesHero />
        <Suspense fallback={<SkeletonFilter />}>
          <RecipesFilter />
        </Suspense>
        <Suspense fallback={<SkeltonRecipesList />}>
          <RecipesList recipes={recipes} />
        </Suspense>
      </div>
    </main>
  );
};

export default RecipesPage;
