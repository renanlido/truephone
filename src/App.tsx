import { ThemeProvider } from 'styled-components';
import theme from 'src/global/themes';
import GlobalStyles from 'src/global/styles/global';
import { Routes } from 'src/routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyles />
      <Routes />
    </div>
  </ThemeProvider>
);

export default App;
