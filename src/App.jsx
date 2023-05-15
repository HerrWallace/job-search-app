import { MantineProvider } from '@mantine/core';
import './App.css';
import { Header } from './Components/Header/Header';
import { SearchPage } from './Components/SearchPage/SearchPage';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <>
        <Header />
        <SearchPage />
      </>
    </MantineProvider>
  );
}

export default App;
