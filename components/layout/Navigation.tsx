'use client';

import MenuIcon from '@assets/icon-hamburger-menu.svg';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SquareButton from '../SquareButton';
import { Button } from '../ui/button';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/recipes', label: 'Recipes' },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <ul className='hidden lg:flex lg:items-center lg:gap-10 lg:-ml-20'>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={clsx(
              'relative text-lg font-semibold leading-normal tracking-normal text-green-900 after:transition-[width] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-orange-500 after:rounded-sm hover:after:w-full rounded-sm border-none outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:bg-none focus-visible:outline-none focus-visible:ring-green-900',
              {
                'after:w-full': pathname === item.href,
              }
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='ghost' className='p-3 size-10 bg-green-300 rounded-sm lg:hidden'>
          <Image src={MenuIcon} width={18} height={16} alt='' />
        </Button>
      </PopoverTrigger>
      <PopoverContent align='end' sideOffset={12} className='z-40 w-[var(--radix-popper-available-width)] lg:hidden'>
        <div className='mx-4 p-2 bg-white rounded-lg shadow-lg md:mx-8'>
          <ul className='mb-3 lg:hidden'>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className='block px-2 py-3 text-lg font-semibold leading-normal tracking-normal text-green-900'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <SquareButton size='full' />
        </div>
      </PopoverContent>
    </Popover>
  );
};
