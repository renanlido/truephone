import { ThemeProvider } from 'styled-components';

import theme from 'src/global/themes';
import GlobalStyles from 'src/global/styles';

import { Routes } from 'src/routes';

import { CustomContextHooks } from 'src/shared/hooks';
import { Container, Header } from './components/infra';
// import { Header } from './components/Header';

const App = () => (
  <ThemeProvider theme={theme}>
    <CustomContextHooks>
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <GlobalStyles />
        <Header />
        <Container>
          <Routes />
        </Container>
      </div>
    </CustomContextHooks>
  </ThemeProvider>
);

export default App;
