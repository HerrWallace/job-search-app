import { MantineProvider } from '@mantine/core';
import './App.css';
import { SearchPage } from './Components/SearchPage/SearchPage';
import { Route, Routes } from 'react-router-dom';
import { VacancyPage } from './Components/VacancyPage/VacancyPage';
import { FavoritesPage } from './Components/FavoritesPage/FavoritesPage';

const theme = {
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
};

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/vacancy/:vacId' element={<VacancyPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </>
    </MantineProvider>
  );
}

export default App;
