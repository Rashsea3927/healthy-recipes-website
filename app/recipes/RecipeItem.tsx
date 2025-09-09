import RoundedButton from '@/components/RoundedButton';
import { Recipe } from '@/types';
import IconCookTime from '@assets/icon-cook-time.svg';
import IconPrepTime from '@assets/icon-prep-time.svg';
import IconServing from '@assets/icon-servings.svg';
import Image from 'next/image';

const RecipeItem = ({ recipe }: { recipe: Recipe }) => {
  return (
    <li className='grid grid-rows-subgrid row-span-5 gap-0 p-2 bg-white rounded-10 border border-green-300 shadow-md'>
      <div className='overflow-hidden rounded-10 mb-4'>
        <picture>
          <source srcSet={recipe.largeImage} media='(min-width: 768px)' />
          <Image
            src={recipe.smallImage}
            width={540}
            height={500}
            alt={recipe.title}
            className='w-full h-auto object-cover max-h-[300px] sm:max-h-[360px] md:max-h-[450px] lg:max-h-[360px] xl:max-h-[300px]'
          />
        </picture>
      </div>
      <div className='px-2 display-inherit'>
        <h3 className='text-preset-5 mb-[10px] truncate'>{recipe.title}</h3>
        <p className='text-preset-9 text-green-600 mb-4'>{recipe.overview}</p>
        <div className='flex flex-wrap gap-x-4 gap-y-2 mb-4'>
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
        <RoundedButton link={recipe.slug.current} />
      </div>
    </li>
  );
};

export default RecipeItem;
