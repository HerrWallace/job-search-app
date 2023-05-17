import { Filter } from "./Filter";
import { SearchBar } from './SearchBar';
import { Vacancies } from "./Vacancies";

export const SearchPage = () => {
  return (
    <div className="flex justify-between h-screen px-[11.25%] pt-10 bg-main-grey">
      <div>
      <Filter />
      </div>

      <div className="flex flex-col gap-4">
      <SearchBar />
      <Vacancies />
      </div>

    </div>
  );
};
