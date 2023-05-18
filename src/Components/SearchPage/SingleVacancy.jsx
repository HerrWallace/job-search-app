import { LocationIcon } from '../Assets/LocationIcon';
import { StarIcon } from '../Assets/StarIcon';

export const SingleVacancy = () => {
  return (
    <div className=' bg-white p-6 rounded-xl'>
      <div className='flex justify-between'>
        <a href='#' className='font-semibold text-xl text-blue-main'>
          Менеджер-дизайнер
        </a>
        <button className='bg-inherit p-0'>
          <StarIcon />
        </button>
      </div>

      <div>
        <div className='font-semibold inline'>з/п от 70000 rub</div>
        <span className=' text-gray-500 px-3'>•</span>
        Полный рабочий день
      </div>

      <div className='flex gap-2 items-center'>
        <LocationIcon />
        <div>Новый Уренгой</div>
      </div>
    </div>
  );
};
