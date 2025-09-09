import { Skeleton } from '@/components/ui/skeleton';

const SkeltonRecipesList = () => {
  return (
    <div className='grid gap-8 lg:grid-cols-2 xl:grid-cols-3'>
      {[...Array(8)].map((_, i) => (
        <div key={i}>
          <Skeleton className='mb-4 rounded-10 h-[300px] sm:h-[360px] md:h-[450px] lg:h-[360px] xl:h-[300px]' />
          <Skeleton className='mb-4 h-6 w-full rounded-10' />
          <Skeleton className='mb-4 h-6 w-full rounded-10' />
          <Skeleton className='mb-4 h-6 w-full rounded-10' />
          <Skeleton className='h-12 w-full rounded-10' />
        </div>
      ))}
    </div>
  );
};

export default SkeltonRecipesList;
