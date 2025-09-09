import RecipesFilter from '@/app/recipes/RecipesFilter';
import RecipesHero from '@/app/recipes/RecipesHero';
import RecipesList from '@/app/recipes/RecipesList';
import { Suspense } from 'react';
import SkeltonRecipesList from './SkeltonRecipesList';

type SeachParamsType = {
  prepTime?: string;
  cookTime?: string;
  q?: string;
};

export const metadata = {
  title: 'Recipes | Healthy Recipe Finder',
  description: 'Explore a variety of healthy recipes tailored to your preferences.',
};

const RecipesPage = async ({ searchParams }: { searchParams: SeachParamsType }) => {
  const { prepTime, cookTime, q } = await searchParams;

  const prepTimeNum = prepTime ? parseInt(prepTime, 10) : undefined;
  const cookTimeNum = cookTime ? parseInt(cookTime, 10) : undefined;
  const query = q;

  return (
    <main className='pt-12 md:pt-16 lg:pt-20 lg:pb-24 lg:border-b lg:border-green-300 '>
      <div className='px-4 md:px-8 lg:max-w-(--container) lg:mx-auto xl:px-0'>
        <RecipesHero />
        <RecipesFilter />
        <Suspense fallback={<SkeltonRecipesList />}>
          <RecipesList prepTime={prepTimeNum} cookTime={cookTimeNum} q={query} />
        </Suspense>
      </div>
    </main>
  );
};

export default RecipesPage;
