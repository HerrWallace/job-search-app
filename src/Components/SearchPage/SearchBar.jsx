import { Button, Input } from '@mantine/core';
import { SearchIcon } from '../Assets/SearchIcon';

export const SearchBar = () => {
  return (
    <>
      <div className='w-[773px] relative'>
        <div className='relative'>
          <Input
            icon={<SearchIcon />}
            placeholder='Введите название вакансии'
            size='lg'
          />
        </div>

        <div className='absolute top-2 right-3'>
          <Button radius='md'>Поиск</Button>
        </div>
      </div>
    </>
  );
};
