import SquareButton from '@/components/SquareButton';
import HeroLargeImage from '@assets/image-home-hero-large.webp';
import HeroSmallImage from '@assets/image-home-hero-small.webp';
import PatternSquiggle from '@assets/pattern-squiggle-1.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='relative overflow-hidden pt-12 lg:pt-20'>
      <Image className='absolute bottom-12 left-0 -z-1 w-full h-auto' src={PatternSquiggle} alt='' />
      <div className='px-4 md:px-8 lg:text-center lg:max-w-(--container) lg:mx-auto xl:px-0'>
        <div className='grid gap-4 mb-8 lg:gap-3 lg:mb-10'>
          <h1 className='text-preset-1 text-green-900 leading-tight tracking-tightest font-extrabold'>
            <span className='relative after:absolute after:bottom-3 after:-z-1 after:left-0 after:w-full after:h-6 after:rounded-sm after:bg-orange-500/40'>
              Healthy
            </span>{' '}
            meals, zero fuss
          </h1>
          <p className='text-preset-6 lg:max-w-[580px] lg:mx-auto'>
            Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.
          </p>
        </div>
        <SquareButton size='large' text='Start exploring' />
        <div className='mt-10 lg:mt-20'>
          <div className='bg-white p-1 rounded-md md:rounded-xl lg:p-2'>
            <div className='overflow-hidden rounded-md md:rounded-xl'>
              <picture>
                <source srcSet={HeroLargeImage.src} media='(min-width: 768px)' />
                <Image
                  className='w-full h-auto'
                  src={HeroSmallImage.src}
                  width={343}
                  height={200}
                  alt='Healthy meals, zero fuss'
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
