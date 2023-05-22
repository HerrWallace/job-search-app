import { MantineProvider } from '@mantine/core';
import './App.css';
import { Header } from './Components/Header/Header';
import { SearchPage } from './Components/SearchPage/SearchPage';
import { Route, Routes } from 'react-router-dom';
import { VacancyPage } from './Components/VacancyPage/VacancyPage';

const theme = {
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
};

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/vacancy/:vacId' element={<VacancyPage />} />
        </Routes>
      </>
    </MantineProvider>
  );
}

export default App;
