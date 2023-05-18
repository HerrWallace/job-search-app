import { Button, NumberInput, Select } from '@mantine/core';
import { useState } from 'react';

export const Filter = () => {
  const data = [
    { value: 'React', label: 'React' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Svelte', label: 'Svelte' },
    { value: 'Vue', label: 'Vue' },
  ];

  const [valueFrom, setValueFrom] = useState('');
  const [valueTo, setValueTo] = useState('');

  return (
    <div className='w-full p-5 bg-white '>
      <div className='flex items-baseline gap-6 mb-4'>
        <span className='font-bold text-xl'>Фильтры</span>
        <button className='bg-inherit'>Сбросить все x</button>
      </div>

      <div className='mb-4'>
        <span className=' block font-bold text-xl mb-2'>Отрасль</span>
        <Select placeholder='Выберите отрасль' searchable data={data} size='md' />
      </div>

      <div className='flex flex-col gap-2 mb-5'>
        <span className='block font-bold text-xl'>Оклад</span>
        <NumberInput
          value={valueFrom}
          onChange={setValueFrom}
          placeholder='От'
          size='md'
        />
        <NumberInput
          placeholder='До'
          value={valueTo}
          onChange={setValueTo}
          size='md'
        />
      </div>

      <div className='w-full'>
        <Button fullWidth>Применить</Button>
      </div>
    </div>
  );
};
