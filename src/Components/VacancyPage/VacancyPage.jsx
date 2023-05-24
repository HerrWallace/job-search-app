import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSingleVacancy } from '../../api';
import { SingleVacancy } from '../SearchPage/SingleVacancy';
import parse from 'html-react-parser';
import { Loader } from '@mantine/core';

export const VacancyPage = () => {
  const { vacId: id } = useParams();

  const [data, setData] = useState({});
  const [richText, setRichText] = useState('');

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getSingleVacancy(id).then((result) => {
      setData(result);
      setRichText(result.vacancyRichText);
      setIsLoaded(true);
    });
  }, [id]);

  if (!isLoaded) {
    return (
      <div className='flex h-[80vh] items-center justify-center'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='flex flex-col px-[23%] h-desktop bg-main-grey'>
      <div className='pt-10 pb-5 w-full'>
        <SingleVacancy data={data} />
      </div>
      <div className='p-6 pt-4 bg-white rounded-xl'>{parse(richText)}</div>
    </div>
  );
};
