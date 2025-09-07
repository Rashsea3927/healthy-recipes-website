import { HeadingSecond } from '@/components/Heading';
import ExistPhilosophyList from './ExistPhilosophyList';

const FoodPhilosophyList = [
  {
    title: 'Whole ingredients first.',
    description: 'Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.',
  },
  {
    title: 'Flavor without compromise.',
    description: 'Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.',
  },
  {
    title: 'Respect for time.',
    description:
      'Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.',
  },
  {
    title: 'Sustainable choices.',
    description:
      'Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.',
  },
];

const FoodPhilosophy = () => {
  return (
    <section className='py-12 px-4 border-b-[1px] border-green-300 md:py-20 md:px-8 lg:py-24 lg:max-w-(--container) lg:mx-auto xl:px-0'>
      <div className='grid lg:grid-cols-[0.5fr_1fr] lg:gap-16'>
        <HeadingSecond text='Our food philosophy' className='mb-10 lg:mb-0' />
        <ExistPhilosophyList list={FoodPhilosophyList} />
      </div>
    </section>
  );
};

export default FoodPhilosophy;
