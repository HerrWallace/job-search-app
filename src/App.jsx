import { MantineProvider } from '@mantine/core';
import './App.css';
import { Header } from './Components/Header/Header';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <>
      <Header />
        <div> Test! Center me!</div>
      </>
    </MantineProvider>
  );
}

export default App;
