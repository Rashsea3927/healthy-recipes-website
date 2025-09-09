import { HeadingSecond } from '@/components/Heading';
import AboutHeroLargeImage from '@assets/image-about-our-mission-large.webp';
import AboutHeroSmallImage from '@assets/image-about-our-mission-small.webp';
import PatternSquiggle from '@assets/pattern-squiggle-2.svg';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className='grid gap-10 pt-12 pb-16 px-4 border-b-[1px] border-green-300 md:gap-16 md:pt-16 md:pb-20 md:px-8 lg:pt-20 lg:pb-24 lg:max-w-(--container) lg:mx-auto lg:grid-cols-[0.825fr_1fr] lg:items-center xl:px-0'>
      <div className='grid gap-6'>
        <div className='w-30 px-[6px] py-[2px] rounded-md bg-orange-500 text-preset-5'>Our Mission</div>
        <HeadingSecond text='Help more people cook nourishing meals, more often.' />
        <div className='grid gap-4'>
          <p className='text-preset-6'>
            Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely
            delicious.
          </p>
          <p className='text-preset-6'>
            We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed
            shortcuts—just honest ingredients and straightforward steps.
          </p>
        </div>
      </div>
      <div className='relative'>
        <Image
          src={PatternSquiggle.src}
          width={201}
          height={144}
          className='hidden xl:block absolute bottom-30 -right-14 z-10'
          alt=''
        />
        <picture>
          <source srcSet={AboutHeroLargeImage.src} media='(min-width: 768px)' />
          <Image
            className='w-full h-auto rounded-md md:rounded-xl'
            src={AboutHeroSmallImage.src}
            width={686}
            height={667}
            alt=''
          />
        </picture>
      </div>
    </section>
  );
};

export default AboutHero;
