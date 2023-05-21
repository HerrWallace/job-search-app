/* eslint-disable react/prop-types */
import { SingleVacancy } from './SingleVacancy';

export const Vacancies = (props) => {
  const { vacancyData: data } = props;

  const vacancies = data.map((item) => {
    return <SingleVacancy key={Math.random()} data={item} />;
  });

  return (
    <>
      {vacancies}
    </>
  );
};
