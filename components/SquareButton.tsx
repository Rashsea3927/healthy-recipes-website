import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import Link from 'next/link';

type SquareButtonProps = {
  size: 'small' | 'medium' | 'large' | 'full';
  text?: string;
};

const SquareButton = ({ size, text = 'Browse recipes' }: SquareButtonProps) => {
  return (
    <Button
      asChild
      className={clsx(
        'text-xl font-bold leading-loose tracking-tight text-white bg-green-900 px-4 py-3 h-13 rounded-10 hover:bg-green-600',
        {
          'inline-flex px-4 py-3': size === 'small',
          'inline-flex px-6 py-4': size === 'medium',
          'inline-flex px-8 py-4': size === 'large',
          'block w-full text-center': size === 'full',
        }
      )}
    >
      <Link href='/recipes' className='focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-900'>
        {text}
      </Link>
    </Button>
  );
};

export default SquareButton;
