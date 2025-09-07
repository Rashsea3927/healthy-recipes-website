import { HeadingSecond } from '@/components/Heading';
import ExplainLargeImage from '@assets/image-home-real-life-large.webp';
import ExplainSmallImage from '@assets/image-home-real-life-small.webp';
import Image from 'next/image';

const Explain = () => {
  return (
    <section className='py-16 md:py-20 lg:py-24'>
      <div className='grid gap-8 px-4 md:px-8 md:gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-12 lg:items-center lg:max-w-(--container) lg:mx-auto xl:px-0'>
        <div>
          <HeadingSecond text='Built for real life' className='mb-8 md:mb-12 lg:mb-5' />
          <p className='text-preset-6 mb-5'>
            Cooking shouldn’t be complicated. These recipes come in under{' '}
            <span className='relative font-bold after:absolute after:bottom-1 after:-z-1 after:left-0 after:w-full after:h-3 after:rounded-sm after:bg-orange-500'>
              30 minutes
            </span>{' '}
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p className='text-preset-6'>
            Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
          </p>
        </div>
        <div className='overflow-hidden rounded-xl'>
          <picture>
            <source srcSet={ExplainLargeImage.src} media='(min-width: 768px)' />
            <Image className='w-full h-auto' src={ExplainSmallImage.src} width={343} height={243} alt='' />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Explain;
