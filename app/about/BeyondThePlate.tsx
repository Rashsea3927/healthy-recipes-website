import { HeadingSecond } from '@/components/Heading';
import AboutBeyondPlanetLargeImage from '@assets/image-about-beyond-the-plate-large.webp';
import AboutBeyondPlanetSmallImage from '@assets/image-about-beyond-the-plate-small.webp';
import Image from 'next/image';

const listItems = [
  { description: 'Encourage family dinners and social cooking.' },
  { description: 'Reduce reliance on single-use packaging and delivery waste.' },
  { description: 'Spark curiosity about seasonal produce and local agriculture.' },
];

const BeyondThePlate = () => {
  return (
    <section className='py-12 px-4 md:py-20 md:px-8 lg:py-24 lg:max-w-(--container) lg:mx-auto xl:px-0'>
      <div className='grid gap-8 md:gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-12 lg:items-center xl:grid-cols-[0.5fr_1fr] xl:gap-16'>
        <div>
          <HeadingSecond text='Beyond the plate' className='mb-5' />
          <p className='text-preset-6 mb-3'>
            We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:
          </p>
          <ul>
            {listItems.map((item, index) => (
              <li key={index} className='text-preset-6 list-disc list-outside ml-7'>
                {item.description}
              </li>
            ))}
          </ul>
        </div>
        <div className='rounded-md overflow-hidden md:rounded-xl'>
          <picture>
            <source srcSet={AboutBeyondPlanetLargeImage.src} media='(min-width:768px)' />
            <Image
              className='w-full h-auto align-bottom'
              src={AboutBeyondPlanetSmallImage.src}
              width={343}
              height={184}
              alt='About Beyond the Plate'
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default BeyondThePlate;
