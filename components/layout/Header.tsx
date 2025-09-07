import { MobileNavigation, Navigation } from '@/components/layout/Navigation';
import SquareButton from '@/components/SquareButton';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import MenuIcon from '@assets/icon-hamburger-menu.svg';
import Logo from '@assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='p-4 border-b border-green-300 md:p-8 lg:px-15 lg:py-5'>
      <div className='flex items-center justify-between lg:max-w-(--header) lg:mx-auto'>
        <Link href='/'>
          <Image className='w-auto h-8 md:h-10' src={Logo} width={260} height={40} alt='Healthy Recipe Finder' />
        </Link>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='ghost' className='p-3 size-10 bg-green-300 rounded-sm lg:hidden'>
              <Image src={MenuIcon} width={18} height={16} alt='' />
            </Button>
          </PopoverTrigger>
          <PopoverContent align='end' sideOffset={12} className='w-[var(--radix-popper-available-width)] lg:hidden'>
            <div className='mx-4 p-2 bg-white rounded-lg shadow-lg md:mx-8'>
              <MobileNavigation />
              <SquareButton size='full' />
            </div>
          </PopoverContent>
        </Popover>
        <Navigation />
        <div className='hidden lg:block'>
          <SquareButton size='small' />
        </div>
      </div>
    </header>
  );
};

export default Header;
