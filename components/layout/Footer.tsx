import IconBluesky from '@assets/icon-bluesky.svg';
import IconInstagram from '@assets/icon-instagram.svg';
import IconTikTok from '@assets/icon-tiktok.svg';
import Image from 'next/image';
import Link from 'next/link';

const footerAccountsList = [
  { name: 'Instagram', href: '#', icon: IconInstagram },
  { name: 'Bluesky', href: '#', icon: IconBluesky },
  { name: 'TikTok', href: '#', icon: IconTikTok },
];

const Footer = () => {
  return (
    <footer className='px-4 md:px-8 lg:max-w-(--container) lg:mx-auto xl:px-0'>
      <div className='flex flex-col pt-8 pb-5 md:flex-row-reverse md:justify-between md:py-10'>
        <ul className='flex gap-4 justify-center mb-6'>
          {footerAccountsList.map((account) => (
            <li key={account.name}>
              <Link href={account.href} className='flex items-center gap-6'>
                <Image className='w-auto h-[22px]' src={account.icon} alt={account.name} width={22} height={22} />
              </Link>
            </li>
          ))}
        </ul>
        <p className='text-preset-9 text-center'>Made with ❤️ and 🥑</p>
      </div>
    </footer>
  );
};

export default Footer;
