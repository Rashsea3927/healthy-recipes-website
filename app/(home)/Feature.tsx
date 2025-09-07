import { HeadingSecond } from '@/components/Heading';
import IconMinimumFuss from '@assets/icon-minimum-fuss.svg';
import IconSearchInSeconds from '@assets/icon-search-in-seconds.svg';
import IconWholeFood from '@assets/icon-whole-food-recipes.svg';
import Image from 'next/image';

const featureItems = [
  {
    image: IconWholeFood,
    title: 'Whole-food recipes',
    description: 'Each dish uses everyday, unprocessed ingredients.',
  },
  {
    image: IconMinimumFuss,
    title: 'Minimum fuss',
    description: 'All recipes are designed to make eating healthy quick and easy.',
  },
  {
    image: IconSearchInSeconds,
    title: 'Search in seconds',
    description: 'Filter by name or ingredient and jump straight to the recipe you need.',
  },
];

const Feature = () => {
  return (
    <section className='pt-16 md:pt-20 md:pb-20 md:border-b-[1px] md:border-green-300 lg:py-24'>
      <div className='px-4 md:px-8 lg:max-w-(--container) lg:mx-auto xl:px-0'>
        <HeadingSecond text='What you’ll get' className='mb-8 md:mb-12' />
        <ul className='grid gap-6 md:gap-8 lg:grid-cols-3'>
          {featureItems.map((item) => (
            <li key={item.title} className='mb-8 last:mb-0'>
              <div className='grid place-items-center bg-white rounded-xl border-[1px] border-green-200 shadow-clear size-15 mb-5 md:mb-6'>
                <Image src={item.image} alt={item.title} />
              </div>
              <h3 className='text-3xl leading-relaxed tracking-tighter font-bold text-green-900 mb-3'>{item.title}</h3>
              <p className='text-preset-6'>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Feature;
