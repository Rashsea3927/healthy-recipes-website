import { Button } from '@/components/ui/button';
import Link from 'next/link';

const RoundedButton = ({ link }: { link: string }) => {
  return (
    <Button asChild className='bg-green-900 h-12 w-full rounded-full'>
      <Link href={`/recipes/${link}`} className='text-preset-8 text-white'>
        View Recipe
      </Link>
    </Button>
  );
};

export default RoundedButton;
