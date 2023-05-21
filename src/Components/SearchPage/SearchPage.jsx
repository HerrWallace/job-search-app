import { useEffect, useState } from 'react';
import { getCatalogue, getVacancies } from '../../api';
import { Filter } from './Filter';
import { SearchBar } from './SearchBar';
import { Vacancies } from './Vacancies';

export const SearchPage = () => {
  const [vacancyData, setVacancyData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [catalogueData, setCatalogueData] = useState([]);
  const [catalogueKey, setCatalogueKey] = useState('');
  const [valueFrom, setValueFrom] = useState('');
  const [valueTo, setValueTo] = useState('');

  const [isLoaded, setIsLoaded] = useState(false);

  // const [page, setPage] = useState(0);

  useEffect(() => {
    getCatalogue().then((result) => setCatalogueData(result));
    getVacancies().then((result) => {
      setVacancyData(result.objects);
      setIsLoaded(true);
    });
  }, []);

  const searchVacancy = async () => {
    setIsLoaded(false);
    getVacancies(keyword, catalogueKey, valueFrom, valueTo).then((result) => {
      setVacancyData(result.objects);
      setIsLoaded(true);
    });
  };

  return (
    <div className='flex gap-7 justify-between h-screen px-[11.25%] pt-10 bg-main-grey'>
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

      <div className='flex flex-col gap-4'>
        <SearchBar
          searchVacancy={searchVacancy}
          keyword={keyword}
          handleKeyword={setKeyword}
        />
        {isLoaded ? <Vacancies vacancyData={vacancyData} /> : 'Loading, please MEOW'}
      </div>
    </div>
  );
};
