/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { LocationIcon } from '../Assets/LocationIcon';
import { StarIcon } from '../Assets/StarIcon';
import { StarActiveIcon } from './../Assets/StarActiveIcon';
import { useState } from 'react';
import { getStorage } from '../../misc';

export const SingleVacancy = (props) => {
  const {
    profession,
    town,
    type_of_work: typeOfWork,
    payment_from: paymentFrom,
    payment_to: paymentTo,
    currency,
    id,
  } = props.data;

  const [isFaved, setIsFaved] = useState(getStorage().includes(id));

  const addToFavorite = () => {
    if (!isFaved) {
      const newStorageItem = [...getStorage(), id];
      localStorage.setItem('favourites', JSON.stringify(newStorageItem));
      setIsFaved(true);
    } else {
      const newStorageItem = getStorage().filter((savedId) => savedId !== id);
      localStorage.setItem('favourites', JSON.stringify(newStorageItem));
      setIsFaved(false);
    }
  };

  const from = paymentFrom ? `от ${paymentFrom} ${currency}` : '';
  const to = paymentTo ? `до ${paymentTo} ${currency}` : '';
  const dash = paymentFrom && paymentTo ? ' - ' : '';
  const salary = from || to ? `з/п ${from}${dash}${to}` : 'Не указана';

  return (
    <div
      className='flex flex-col justify-between bg-white p-6 rounded-xl min-h-[137px]'
      data-elem={`vacancy-${id}`}
    >
      <div className='flex justify-between content-start'>
        <Link
          to={`/vacancy/${id}`}
          className='font-semibold text-xl/6 text-blue-main'
        >
          {profession}
        </Link>
        <button
          onClick={() => {
            addToFavorite();
          }}
          className='bg-inherit p-0'
          data-elem={`vacancy-${id}-shortlist-button`}
        >
          {isFaved ? <StarActiveIcon /> : <StarIcon />}
        </button>
      </div>

      <div>
        <div className='font-semibold inline text-base/5'>{salary}</div>
        <span className='text-gray-500 px-3'>•</span>
        {typeOfWork.title}
      </div>

      <div className='flex gap-2 items-center'>
        <LocationIcon />
        <div className='text-base/5'>{town.title}</div>
      </div>
    </div>
  );
};
