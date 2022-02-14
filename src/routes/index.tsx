import { Routes as ReactRoutes, Route, BrowserRouter } from 'react-router-dom';
import { Home, ListValidation, Finish } from 'src/pages';
import { NotFound } from 'src/pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <ReactRoutes>
      <Route element={<Home />} path="/" />
      <Route path="/list" element={<ListValidation />} />
      <Route path="/finish" element={<Finish />} />
      <Route element={<NotFound />} path="*" />
    </ReactRoutes>
  </BrowserRouter>
);

export { Routes };
