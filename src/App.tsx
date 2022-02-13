import { ThemeProvider } from 'styled-components';

import theme from 'src/global/themes';
import GlobalStyles from 'src/global/styles';

import { Routes } from 'src/routes';

import { CustomContextHooks } from 'src/shared/hooks';
import { Container, Header } from './components/infra';

const App = () => (
  <ThemeProvider theme={theme}>
    <CustomContextHooks>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Container>
          <Routes />
        </Container>
      </div>
    </CustomContextHooks>
  </ThemeProvider>
);

export default App;
