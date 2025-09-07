import ExistPhilosophyList from '@/app/about/ExistPhilosophyList';
import { HeadingSecond } from '@/components/Heading';

const ExistReasons = [
  {
    title: 'Cut through the noise.',
    description:
      'The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.',
  },
  {
    title: 'Empower home kitchens.',
    description:
      'When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.',
  },
  {
    title: 'Make healthy look good.',
    description:
      'High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.',
  },
];

const WhyExist = () => {
  return (
    <section className='py-12 px-4 border-b-[1px] border-green-300 md:py-20 md:px-8 lg:py-24 lg:max-w-(--container) lg:mx-auto xl:px-0'>
      <div className='grid lg:grid-cols-[0.5fr_1fr] lg:gap-16'>
        <HeadingSecond text='Why we exist' className='mb-10 lg:mb-0' />
        <ExistPhilosophyList list={ExistReasons} />
      </div>
    </section>
  );
};

export default WhyExist;
