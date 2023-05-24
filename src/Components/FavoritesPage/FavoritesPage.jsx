import { useEffect, useState } from 'react';
import { Vacancies } from '../SearchPage/Vacancies';
import { EmptyState } from './EmptyState';
import { getFavVacancies } from '../../api';
import { Loader } from '@mantine/core';
import { getStorage } from '../../misc';
import { Header } from '../Header/Header';

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
    return (
      <>
        <Header tab={1} />
        <EmptyState />;
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <Header tab={1} />
        <div className='flex h-[80vh] items-center justify-center'>
          <Loader />
        </div>
      </>
    );
  }

  return (
    <>
      <Header tab={1} />
      <div className='w-full px-[23%] pt-10 items-center bg-main-grey h-desktop'>
        <Vacancies vacancyData={vacancyData} />
      </div>
    </>
  );
};
