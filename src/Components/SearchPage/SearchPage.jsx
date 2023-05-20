import { useEffect, useState } from 'react';
import { getCatalogue } from '../../api';
import { Filter } from './Filter';
import { SearchBar } from './SearchBar';
import { Vacancies } from './Vacancies';

export const SearchPage = () => {
  const [data, setData] = useState([]);
  const [catalogueKey, setCatalogueKey] = useState('');
  const [valueFrom, setValueFrom] = useState('');
  const [valueTo, setValueTo] = useState('');

  console.log(catalogueKey);

  useEffect(() => {
    getCatalogue().then((result) => setData(result));
  }, []);


  return (
    <div className='flex justify-between h-screen px-[11.25%] pt-10 bg-main-grey'>
      <div>
        <Filter
          data={data}
          setCatalogueKey={setCatalogueKey}
          setValueFrom={setValueFrom}
          setValueTo={setValueTo}
          valueFrom={valueFrom}
          valueTo={valueTo}
        />
      </div>

      <div className='flex flex-col gap-4'>
        <SearchBar />
        <Vacancies />
      </div>
    </div>
  );
};
