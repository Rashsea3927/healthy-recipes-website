import { Skeleton } from '@/components/ui/skeleton';

const SkeletonFilter = () => {
  return (
    <div className='flex flex-col mb-6 md:flex-row md:justify-between'>
      <div className='flex flex-col gap-3 mb-3 md:flex-row md:mb-0'>
        <Skeleton className='h-12 rounded-10 md:w-[180px]' />
        <Skeleton className='h-12 rounded-10 md:w-[180px]' />
      </div>
      <Skeleton className='h-12 rounded-10 md:w-80 ' />
    </div>
  );
};

export default SkeletonFilter;
