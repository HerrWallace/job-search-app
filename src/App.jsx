import { MantineProvider } from '@mantine/core';
import './App.css';
import { Header } from './Components/Header/Header';
import { SearchPage } from './Components/SearchPage/SearchPage';

function App() {
  const theme = {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <>
        <Header />
        <SearchPage />
      </>
    </MantineProvider>
  );
}

export default App;
