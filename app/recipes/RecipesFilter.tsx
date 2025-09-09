'use client';

import IconArrowDown from '@/components/IconArrowDown';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';
import IconSearch from '@assets/icon-search.svg';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const prepTimes = [
  { value: '0', label: '0 Minutes', id: 'prep-0' },
  { value: '5', label: '5 Minutes', id: 'prep-5' },
  { value: '10', label: '10 Minutes', id: 'prep-10' },
];

const cookTimes = [
  { value: '0', label: '0 Minutes', id: 'cook-0' },
  { value: '5', label: '5 Minutes', id: 'cook-5' },
  { value: '10', label: '10 Minutes', id: 'cook-10' },
  { value: '15', label: '15 Minutes', id: 'cook-15' },
  { value: '20', label: '20 Minutes', id: 'cook-20' },
];

const RecipesFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpenPrep, setIsOpenPrep] = useState(false); // Prep Time用の状態
  const [isOpenCook, setIsOpenCook] = useState(false); // Cook Time用の状態

  useEffect(() => {
    setIsOpenPrep(false);
    setIsOpenCook(false);
  }, [searchParams]);

  const handleChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === 'clear-prep') {
      params.delete('prepTime');
    } else if (value === 'clear-cook') {
      params.delete('cookTime');
    } else if (value === '') {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    setIsOpenPrep(false);
    setIsOpenCook(false);

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <section className='flex flex-col mb-6 md:flex-row md:justify-between'>
      <div className='flex flex-col gap-3 mb-3 md:flex-row md:mb-0'>
        {/* Prep Time Filter */}
        <Popover open={isOpenPrep} onOpenChange={setIsOpenPrep}>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              className='text-green-900 text-preset-7 w-full h-12 rounded-10 bg-white cursor-pointer border-[1px] border-green-300 shadow-none hover:border-green-900 focus-visible:ring-1 md:w-[180px] md:focus-visible:ring-2 md:focus-visible:ring-offset-2'
            >
              Max Prep Time
              <IconArrowDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[var(--radix-popper-available-width)] md:w-60' align='start'>
            <div className='mx-4 p-2 bg-white rounded-lg border-[1px] border-green-300 md:mx-0'>
              <ToggleGroup
                type='single'
                className='flex-col items-start gap-2'
                onValueChange={(value) => handleChange('prepTime', value)}
              >
                {prepTimes.map((time) => (
                  <ToggleGroupItem
                    key={time.value}
                    value={time.value}
                    className={cn(
                      'cursor-pointer justify-start p-2 w-full border-green-300 rounded-lg data-[state=checked]:border-2 data-[state=checked]:border-green-900 focus-visible:[&>span]:ring-4 focus-visible:[&>span]:ring-green-200 data-[state=on]:[&>span]:border-2 data-[state=on]:[&>span]:border-green-900 data-[state=on]:[&>span]:after:size-2 data-[state=on]:[&>span]:after:bg-green-900 data-[state=on]:[&>span]:after:block data-[state=on]:[&>span]:after:absolute data-[state=on]:[&>span]:after:rounded-full data-[state=on]:[&>span]:after:content-[""] data-[state=on]:[&>span]:after:top-1/2 data-[state=on]:[&>span]:after:left-1/2 data-[state=on]:[&>span]:after:-translate-x-1/2 data-[state=on]:[&>span]:after:-translate-y-1/2',
                      time.value === searchParams.get('prepTime') &&
                        '[&>span]:border-2 [&>span]:border-green-900 [&>span]:after:size-2 [&>span]:after:bg-green-900 [&>span]:after:block [&>span]:after:absolute [&>span]:after:rounded-full [&>span]:after:content-[""] [&>span]:after:top-1/2 [&>span]:after:left-1/2 [&>span]:after:-translate-x-1/2 [&>span]:after:-translate-y-1/2'
                    )}
                  >
                    <span className='relative size-4 rounded-full border border-green-300 flex items-center'></span>
                    <p className='text-preset-7'>{time.label}</p>
                  </ToggleGroupItem>
                ))}
                <ToggleGroupItem
                  value='clear-prep'
                  className='cursor-pointer justify-start p-2 w-full border-green-300 rounded-lg data-[state=checked]:border-2 data-[state=checked]:border-green-900 focus-visible:[&>span]:ring-4 focus-visible:[&>span]:ring-green-200'
                >
                  <p className='text-preset-7'>Clear</p>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </PopoverContent>
        </Popover>
        {/* Cook Time Filter */}
        <Popover open={isOpenCook} onOpenChange={setIsOpenCook}>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              className='text-green-900 text-preset-7 w-full h-12 rounded-10 bg-white cursor-pointer border-[1px] border-green-300 shadow-none hover:border-green-900 focus-visible:ring-1 md:w-[180px] md:focus-visible:ring-2 md:focus-visible:ring-offset-2'
            >
              Max Cook Time
              <IconArrowDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[var(--radix-popper-available-width)] md:w-60' align='start'>
            <div className='mx-4 p-2 bg-white rounded-lg border-[1px] border-green-300 md:mx-0'>
              <ToggleGroup
                type='single'
                className='flex-col items-start gap-2'
                onValueChange={(value) => handleChange('cookTime', value)}
              >
                {cookTimes.map((time) => (
                  <ToggleGroupItem
                    key={time.value}
                    value={time.value}
                    className={cn(
                      'cursor-pointer justify-start p-2 w-full border-green-300 rounded-lg data-[state=checked]:border-2 data-[state=checked]:border-green-900 focus-visible:[&>span]:ring-4 focus-visible:[&>span]:ring-green-200 data-[state=on]:[&>span]:border-2 data-[state=on]:[&>span]:border-green-900 data-[state=on]:[&>span]:after:size-2 data-[state=on]:[&>span]:after:bg-green-900 data-[state=on]:[&>span]:after:block data-[state=on]:[&>span]:after:absolute data-[state=on]:[&>span]:after:rounded-full data-[state=on]:[&>span]:after:content-[""] data-[state=on]:[&>span]:after:top-1/2 data-[state=on]:[&>span]:after:left-1/2 data-[state=on]:[&>span]:after:-translate-x-1/2 data-[state=on]:[&>span]:after:-translate-y-1/2',
                      time.value === searchParams.get('cookTime') &&
                        '[&>span]:border-2 [&>span]:border-green-900 [&>span]:after:size-2 [&>span]:after:bg-green-900 [&>span]:after:block [&>span]:after:absolute [&>span]:after:rounded-full [&>span]:after:content-[""] [&>span]:after:top-1/2 [&>span]:after:left-1/2 [&>span]:after:-translate-x-1/2 [&>span]:after:-translate-y-1/2'
                    )}
                  >
                    <span className='relative size-4 rounded-full border border-green-300 flex items-center'></span>
                    <p className='text-preset-7'>{time.label}</p>
                  </ToggleGroupItem>
                ))}
                <ToggleGroupItem
                  value='clear-cook'
                  className='cursor-pointer justify-start p-2 w-full border-green-300 rounded-lg data-[state=checked]:border-2 data-[state=checked]:border-green-900 focus-visible:[&>span]:ring-4 focus-visible:[&>span]:ring-green-200'
                >
                  <p className='text-preset-7'>Clear</p>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className='relative'>
        <Image className='absolute top-1/2 left-4 -translate-y-1/2' src={IconSearch} width={21} alt='' />
        <Input
          className='text-preset-7 w-full h-12 pl-11 rounded-10 bg-white border-[1px] border-green-300 cursor-pointer hover:border-green-900 placeholder:text-green-900/70 focus-visible:ring-1 md:w-80 md:focus-visible:ring-2 md:focus-visible:ring-offset-2'
          type='text'
          name='search'
          placeholder='Search by name or ingredient…'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleChange('q', (e.target as HTMLInputElement).value);
            }
          }}
        />
      </div>
    </section>
  );
};

export default RecipesFilter;
