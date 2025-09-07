'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
            className={clsx('relative text-lg font-semibold leading-normal tracking-normal text-green-900', {
              'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:rounded-sm after:bg-orange-500':
                pathname === item.href,
            })}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const MobileNavigation = () => {
  return (
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
  );
};
