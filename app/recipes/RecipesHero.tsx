import { HeadingSecond } from '@/components/Heading';

const RecipesHero = () => {
  return (
    <section className='pb-12 lg:pb-16'>
      <div className='grid gap-3 lg:text-center'>
        <HeadingSecond text='Explore our simple, healthy recipes' />
        <p className='text-preset-6 lg:max-w-[724px] lg:mx-auto'>
          Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to
          find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.
        </p>
      </div>
    </section>
  );
};

export default RecipesHero;
