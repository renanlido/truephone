import { ThemeProvider } from 'styled-components';
import theme from 'src/global/themes';
import GlobalStyles from 'src/global/styles';
import { Routes } from 'src/routes';
import { Header } from './components/ui';
// import { Header } from './components/Header';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyles />
      <Header />
      <Routes />
    </div>
  </ThemeProvider>
);

export default App;
