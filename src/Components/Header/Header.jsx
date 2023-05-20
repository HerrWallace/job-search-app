import { UnionIcon } from '../Assets/UnionIcon';

export const Header = () => {
  const active = 'text-base/5 text-blue-main font-medium';
  const inActive = 'text-base/5 text-black font-normal';
  return (
    <div className='flex h-[84px] w-full max-w-full py-6 px-[11.25%] justify-between items-center'>
      <div className='flex gap-3 items-center'>
        <UnionIcon />
        <h1 className='font-header font-semibold tracking-[-.02em] text-2xl m-0'>
          Jobored
        </h1>
      </div>

      <div className='flex gap-[60px] pr-[420px] '>
        <a className={active} href='#'>
          Поиск Вакансий
        </a>
        <a className={inActive} href='#'>
          Избранное
        </a>
      </div>
    </div>
  );
};
