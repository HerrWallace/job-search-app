/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { UnionIcon } from '../Assets/UnionIcon';

const active = 'text-base/5 text-blue-main font-medium';
const inActive = 'text-base/5 text-black font-normal';

export const Header = (props) => {
  const { tab } = props;
  const tabSearch = tab == 0 ? active : inActive;
  const tabFavorites = tab == 1 ? active : inActive;

  return (
    <div className='flex h-[84px] w-full max-w-full py-6 px-[11.25%] justify-between items-center'>
      <Link to={'/'} className='flex gap-3 items-center text-black'>
        <UnionIcon />
        <h1 className='font-header font-semibold tracking-[-.02em] text-2xl m-0'>
          Jobored
        </h1>
      </Link>

      <div className='flex gap-[60px] pr-[420px] '>
        <Link to={'/'} className={tabSearch}>
          Поиск Вакансий
        </Link>
        <Link to={'/favorites'} className={tabFavorites}>
          Избранное
        </Link>
      </div>
    </div>
  );
};
