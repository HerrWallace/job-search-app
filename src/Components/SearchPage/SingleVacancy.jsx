import { LocationIcon } from '../Assets/LocationIcon';
import { StarIcon } from '../Assets/StarIcon';

export const SingleVacancy = () => {
  return (
    <div className='flex flex-col justify-between bg-white p-6 rounded-xl min-h-[137px]'>
      <div className='flex justify-between content-start'>
        <a href='#' className='font-semibold text-xl/6 text-blue-main'>
          Менеджер-дизайнер
        </a>
        <button className='bg-inherit p-0'>
          <StarIcon />
        </button>
      </div>

      <div>
        <div className='font-semibold inline text-base/5'>з/п от 70000 rub</div>
        <span className='text-gray-500 px-3'>•</span>
        Полный рабочий день
      </div>

      <div className='flex gap-2 items-center'>
        <LocationIcon />
        <div className='text-base/5'>Новый Уренгой</div>
      </div>
    </div>
  );
};
