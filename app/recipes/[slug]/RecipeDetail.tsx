import RecipeDescList from '@/app/recipes/[slug]/RecipeDescList';
import { HeadingSecond } from '@/components/Heading';
import { RecipeDetailType } from '@/types';
import IconCookTime from '@assets/icon-cook-time.svg';
import IconPrepTime from '@assets/icon-prep-time.svg';
import IconServing from '@assets/icon-servings.svg';
import Image from 'next/image';

const RecipeDetail = ({ recipe }: { recipe: RecipeDetailType }) => {
  return (
    <div className='grid lg:grid-cols-[1fr_0.987fr] lg:gap-10'>
      <div className='overflow-hidden rounded-10 mb-10 lg:self-start'>
        <picture>
          <source srcSet={recipe.largeImage} media='(min-width: 768px)' />
          <Image
            priority
            src={recipe.smallImage}
            width={540}
            height={500}
            alt={recipe.title}
            className='w-full h-auto object-cover'
          />
        </picture>
      </div>
      <div>
        <div>
          <HeadingSecond className='mb-5' text={recipe.title} />
          <p className='text-preset-9 text-green-600 mb-5'>{recipe.overview}</p>
          <div className='flex flex-wrap gap-x-4 gap-y-2 mb-5'>
            <div className='flex items-center gap-[6px]'>
              <Image src={IconServing} width={20} height={20} alt='' />
              <p className='text-preset-9 text-green-900'>Servings: {recipe.servingSize}</p>
            </div>
            <div className='flex items-center gap-[6px]'>
              <Image src={IconPrepTime} width={21} height={20} alt='' />
              <p className='text-preset-9 text-green-900'>Prep: {recipe.prepTime} mins</p>
            </div>
            <div className='flex items-center gap-[6px]'>
              <Image src={IconCookTime} width={20} height={20} alt='' />
              <p className='text-preset-9 text-green-900'>Cook: {recipe.cookTime} mins</p>
            </div>
          </div>
        </div>
        {/* Ingredients & Instructions */}
        <div className='grid gap-5'>
          {/* Ingredients */}
          <RecipeDescList heading='Ingredients' list={recipe.ingredients} />
          {/* Instructions */}
          <RecipeDescList heading='Instructions' list={recipe.instructions} />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
