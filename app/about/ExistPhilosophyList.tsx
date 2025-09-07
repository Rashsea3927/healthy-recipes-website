import IconBulletPoint from '@assets/icon-bullet-point.svg';
import Image from 'next/image';

type ListProps = {
  title: string;
  description: string;
};

const ExistPhilosophyList = ({ list }: { list: ListProps[] }) => {
  return (
    <ul className='grid gap-6 md:gap-8 lg:gap-12'>
      {list.map((item) => (
        <li key={item.title} className='flex gap-5 items-start'>
          <Image src={IconBulletPoint} width={32} height={32} alt='' />
          <div>
            <h3 className='text-preset-4 mb-3'>{item.title}</h3>
            <p className='text-preset-6'>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExistPhilosophyList;
