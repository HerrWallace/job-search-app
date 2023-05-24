import { Button } from '@mantine/core';
import { BigFoot } from '../Assets/BigFoot';
import { Link } from 'react-router-dom';

export const EmptyState = () => {
  return (
    <div className='flex flex-col px-[35%] items-center gap-8 pt-[120px]'>
      <div>
        <BigFoot />
      </div>
      <div className=' text-2xl font-bold'>Упс, здесь еще ничего нет!</div>
      <Link to={'/'}>
        <Button variant='light'>Поиск вакансий </Button>
      </Link>
    </div>
  );
};
