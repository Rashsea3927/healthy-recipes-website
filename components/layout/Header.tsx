import { MobileNavigation, Navigation } from '@/components/layout/Navigation';
import SquareButton from '@/components/SquareButton';
import Logo from '@assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='p-4 border-b border-green-300 md:p-8 lg:px-15 lg:py-5'>
      <div className='flex items-center justify-between lg:max-w-(--header) lg:mx-auto'>
        <Link
          href='/'
          className='outline-none rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-900'
        >
          <Image className='w-auto h-8 md:h-10' src={Logo} width={260} height={40} alt='Healthy Recipe Finder' />
        </Link>
        <MobileNavigation />
        <Navigation />
        <div className='hidden lg:block'>
          <SquareButton size='small' />
        </div>
      </div>
    </header>
  );
};

export default Header;
