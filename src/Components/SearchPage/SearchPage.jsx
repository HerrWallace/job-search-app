import { useEffect, useState } from 'react';
import { getCatalogue, getVacancies } from '../../api';
import { Filter } from './Filter';
import { SearchBar } from './SearchBar';
import { Vacancies } from './Vacancies';
import { Loader, Pagination } from '@mantine/core';

export const SearchPage = () => {
  const [vacancyData, setVacancyData] = useState([]);
  const [vacanciesTotal, setVacanciesTotal] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [catalogueData, setCatalogueData] = useState([]);
  const [catalogueKey, setCatalogueKey] = useState('');
  const [valueFrom, setValueFrom] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [valueTo, setValueTo] = useState('');

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getCatalogue().then((result) => setCatalogueData(result));
    getVacancies().then((result) => {
      setVacancyData(result.objects);
      setVacanciesTotal(result.total > 500 ? 125 : result.total / 4);
      setIsLoaded(true);
    });
  }, []);

  const searchVacancy = async () => {
    setIsLoaded(false);
    getVacancies(keyword, catalogueKey, valueFrom, valueTo, activePage).then(
      (result) => {
        setVacancyData(result.objects);
        setIsLoaded(true);
      }
    );
  };

  return (
    <div className='flex gap-7 justify-between h-desktop px-[11.25%] pt-10 pb-5 bg-main-grey'>
      <div>
        <Filter
          data={catalogueData}
          setCatalogueKey={setCatalogueKey}
          setValueFrom={setValueFrom}
          setValueTo={setValueTo}
          valueFrom={valueFrom}
          valueTo={valueTo}
          searchVacancy={searchVacancy}
          handleKeyword={setKeyword}
        />
      </div>

      <div className='flex flex-col'>
        <SearchBar
          searchVacancy={searchVacancy}
          keyword={keyword}
          handleKeyword={setKeyword}
        />
        {isLoaded ? (
          <Vacancies vacancyData={vacancyData} />
        ) : (
          <div className='flex h-[72.5vh] items-center justify-center'>
            <Loader />
          </div>
        )}
        <Pagination
          value={activePage}
          onChange={setActivePage}
          total={vacanciesTotal}
          boundaries={0}
          position='center'
          styles={() => ({
            dots: {
              display: 'none',
            },
          })}
        />
      </div>
    </div>
  );
};
