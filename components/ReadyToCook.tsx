import SquareButton from '@/components/SquareButton';
import IllustForm from '@assets/pattern-fork.svg';
import IllustKnife from '@assets/pattern-knife.svg';
import Image from 'next/image';

const ReadyToCook = () => {
  return (
    <section className='px-4 md:px-8 lg:max-w-(--container) lg:mx-auto xl:px-0'>
      <div className='relative overflow-hidden z-20 px-4 py-12 rounded-2xl bg-green-200 text-center md:py-20 lg:py-24'>
        <Image
          src={IllustForm}
          alt='Fork illustration'
          className='hidden md:block absolute -bottom-14 -left-14 z-10 w-[180px] h-auto lg:w-[240px] xl:-bottom-6 xl:-left-20 xl:w-[315px]'
        />
        <Image
          src={IllustKnife}
          alt='Knife illustration'
          className='hidden md:block absolute -top-13 -right-2 z-10 w-[172px] h-auto lg:w-[280px] xl:top-3 xl:-right-20 xl:w-[338px]'
        />
        <div className='relative z-30'>
          <h2 className='text-preset-2 mb-3'>Ready to cook smarter?</h2>
          <p className='text-preset-6 mb-8 md:mb-10'>
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <SquareButton size='medium' text='Browse recipes' />
        </div>
      </div>
    </section>
  );
};

export default ReadyToCook;
