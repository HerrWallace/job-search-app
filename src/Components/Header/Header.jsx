import { Union } from './Union';

export const Header = () => {
  return (
    <div className='flex h-[84px] w-full max-w-full py-6 px-[11.25%] content-center justify-between'>
      <div className='flex gap-3'>
        <Union />
        <div className='font-semibold text-2xl'>Jobored</div>
      </div>

      <div className='flex gap-[60px] pr-[420px]'>
        <a href=''>Поиск Вакансий</a>
        <a href=''>Избранное</a>
      </div>
    </div>
  );
};