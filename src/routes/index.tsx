import { Route, BrowserRouter } from 'react-router-dom';
import { Home } from 'src/pages/Home';
import { NotFound } from 'src/pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Route element={Home} path="/">
      <Route path="*" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </BrowserRouter>
);

export { Routes };
