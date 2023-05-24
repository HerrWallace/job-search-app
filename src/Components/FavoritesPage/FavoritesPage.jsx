import { useEffect, useState } from 'react';
import { Vacancies } from '../SearchPage/Vacancies';
import { EmptyState } from './EmptyState';
import { getFavVacancies } from '../../api';
import { Loader } from '@mantine/core';
import { getStorage } from '../../misc';

export const FavoritesPage = () => {
  const areFavsEmpty = !(getStorage().length > 0);
  const [vacancyData, setVacancyData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!areFavsEmpty) {
      getFavVacancies(getStorage()).then((result) => {
        setVacancyData(result.objects);
        setIsLoaded(true);
      });
    }
  }, [areFavsEmpty]);

  if (areFavsEmpty) {
    return <EmptyState />;
  }

  if (!isLoaded) {
    return (
      <div className='flex h-[80vh] items-center justify-center'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='w-full px-[23%] pt-10 items-center bg-main-grey h-desktop'>
      <Vacancies vacancyData={vacancyData} />
    </div>
  );
};
