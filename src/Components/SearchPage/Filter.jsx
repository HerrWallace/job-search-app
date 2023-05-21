/* eslint-disable react/prop-types */
import { Button, NumberInput, Select } from '@mantine/core';
import { useState } from 'react';
import { Cross } from '../Assets/Cross';
import { ArrowDown } from '../Assets/ArrowDown';

export const Filter = (props) => {
  const { data, setCatalogueKey, setValueFrom, setValueTo, valueFrom, valueTo, searchVacancy, handleKeyword } =
    props;

  const [searchValue, setSearchValue] = useState('');

  const clearAll = () => {
    setCatalogueKey('');
    setValueFrom('');
    setValueTo('');
    setSearchValue('');
    handleKeyword('');
  };

  const styles = () => ({
    controlUp: {
      border: 'none',
    },
    controlDown: {
      border: 'none',
    },
  });

  return (
    <div className='w-full min-w-[315px] p-5 bg-white rounded-xl'>
      <div className='flex justify-between items-start gap-6 mb-7'>
        <div className='font-bold text-xl/5'>Фильтры</div>
        <div onClick={clearAll} className='flex items-center'>
          <button className='bg-inherit text-sm font-medium text-gray-500 p-0  mr-1'>
            Сбросить все
          </button>
          <Cross />
        </div>
      </div>

      <div className='mb-5'>
        <span className=' block font-bold text-base/5 mb-2'>Отрасль</span>
        <Select
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onChange={setCatalogueKey}
          data={data}
          placeholder='Выберите отрасль'
          searchable
          size='md'
          rightSection={<ArrowDown />}
          aria-label='Отрасль'
        />
      </div>

      <div className='flex flex-col gap-2 mb-5'>
        <span className='block font-bold text-base/5'>Оклад</span>
        <NumberInput
          value={valueFrom}
          onChange={setValueFrom}
          placeholder='От'
          size='md'
          aria-label='Оклад от'
          styles={styles}
        />
        <NumberInput
          placeholder='До'
          value={valueTo}
          onChange={setValueTo}
          size='md'
          aria-label='Оклад до'
          styles={styles}
        />
      </div>

      <div className='w-full'>
        <Button onClick={searchVacancy} fullWidth radius='md' size='md'>
          Применить
        </Button>
      </div>
    </div>
  );
};
