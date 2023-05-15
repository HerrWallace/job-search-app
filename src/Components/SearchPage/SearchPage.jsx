import { Filter } from "./Filter";
import { SearchBar } from './SearchBar';
import { Vacancies } from "./Vacancies";

export const SearchPage = () => {
  return (
    <div className="flex justify-between h-screen px-[11.25%] pt-10 bg-main-grey">
      <div>
      <Filter />
      </div>

      <div>
      <SearchBar />
      <Vacancies />
      </div>

    </div>
  );
};
