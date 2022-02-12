import { Routes as ReactRoutes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from 'src/pages/Home';
import { NotFound } from 'src/pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <ReactRoutes>
      <Route element={<Home />} path="/">
        <Route path="/listVaidation:data" element={<NotFound />} />
        <Route path="/finalizar" element={<NotFound />} />
      </Route>
    </ReactRoutes>
  </BrowserRouter>
);

export { Routes };
