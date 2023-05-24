/* eslint-disable react/prop-types */
import { Button, TextInput } from '@mantine/core';
import { SearchIcon } from '../Assets/SearchIcon';

export const SearchBar = (props) => {
  const { searchVacancy, handleKeyword, keyword } = props;

  return (
    <>
      <div className='w-[773px] relative'>
        <div className='relative'>
          <TextInput
            value={keyword}
            onChange={(e) => {
              handleKeyword(e.currentTarget.value);
            }}
            icon={<SearchIcon />}
            placeholder='Введите название вакансии'
            size='lg'
            data-elem='search-input'
          />
        </div>

        <div className='absolute top-2 right-3'>
          <Button
            onClick={() => searchVacancy()}
            radius='md'
            data-elem='search-button'
          >
            Поиск
          </Button>
        </div>
      </div>
    </>
  );
};
