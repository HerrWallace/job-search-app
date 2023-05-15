import { MantineProvider } from '@mantine/core';
import './App.css';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <>
        <div> Test! Center me!</div>
      </>
    </MantineProvider>
  );
}

export default App;
