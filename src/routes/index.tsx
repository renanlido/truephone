import { Routes as ReactRoutes, Route, BrowserRouter } from 'react-router-dom';
import { Home, ListValidation } from 'src/pages';
import { NotFound } from 'src/pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <ReactRoutes>
      <Route element={<Home />} path="/" />
      <Route path="/list" element={<ListValidation />} />
      <Route path="/finalizar" element={<NotFound />} />
      <Route element={<NotFound />} path="/not-found" />
    </ReactRoutes>
  </BrowserRouter>
);

export { Routes };
