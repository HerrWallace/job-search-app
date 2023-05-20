/* eslint-disable react/prop-types */
import { Button, NumberInput, Select } from '@mantine/core';
import { useState } from 'react';

export const Filter = (props) => {
  const { data, setCatalogueKey, setValueFrom, setValueTo, valueFrom, valueTo } = props;

  const [searchValue, setSearchValue] = useState('');

  const clearAll = () => {
    setCatalogueKey('');
    setValueFrom('');
    setValueTo('');
    setSearchValue('');
  };

  return (
    <div className='w-full p-5 bg-white rounded-xl'>
      <div className='flex items-baseline gap-6 mb-4'>
        <span className='font-bold text-xl'>Фильтры</span>
        <button onClick={clearAll} className='bg-inherit'>Сбросить все x</button>
      </div>

      <div className='mb-4'>
        <span className=' block font-bold text-xl mb-2'>Отрасль</span>
        <Select
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onChange={setCatalogueKey}
          data={data}
          placeholder='Выберите отрасль'
          searchable
          size='md'
          aria-label='Отрасль'
        />
      </div>

      <div className='flex flex-col gap-2 mb-5'>
        <span className='block font-bold text-xl'>Оклад</span>
        <NumberInput
          value={valueFrom}
          onChange={setValueFrom}
          placeholder='От'
          size='md'
          aria-label='Оклад от'
        />
        <NumberInput
          placeholder='До'
          value={valueTo}
          onChange={setValueTo}
          size='md'
          aria-label='Оклад до'
        />
      </div>

      <div className='w-full' >
        <Button fullWidth>Применить</Button>
      </div>
    </div>
  );
};
