import RecipeItem from '@/app/recipes/RecipeItem';
import { HeadingSecond } from '@/components/Heading';
import { Recipe } from '@/types';

const MoreRecipes = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <div className='pt-12 px-4 md:px-8 lg:max-w-(--container) lg:pt-24 lg:mx-auto xl:px-0'>
      <HeadingSecond text='More Recipes' />
      <ul className='grid gap-8 mt-6 lg:grid-cols-2 xl:grid-cols-3'>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe._id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default MoreRecipes;
