import IconBulletPoint from '@assets/icon-bullet-point.svg';
import Image from 'next/image';

const RecipeDescList = ({ heading, list }: { heading: string; list: string[] }) => {
  return (
    <div>
      <h3 className='text-preset-4 mb-4'>{heading}:</h3>
      <ul className='grid gap-2'>
        {list.map((item, index) => (
          <li key={index} className='text-preset-6 flex items-start gap-2'>
            <Image className='w-6 h-auto' src={IconBulletPoint} width={32} height={32} alt='' />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDescList;
