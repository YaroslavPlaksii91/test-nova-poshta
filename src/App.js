import { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Container';
import Nav from 'components/Nav';
import './App.css';

const StatusView = lazy(() =>
  import('./views/StatusView' /* webpackChunkName: "status-view" */)
);
const WarehousesView = lazy(() =>
  import('./views/WarehousesView' /* webpackChunkName: "warehouses-view" */)
);

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      {isLoading && (
        <Circles
          ariaLabel="circles-loading"
          wrapperClass="loader"
          color="orange"
        />
      )}
      <Nav />
      <Suspense
        fallback={
          <Circles
            ariaLabel="circles-loading"
            wrapperClass="loader"
            color="orange"
          />
        }
      >
        <Routes>
          <Route
            path="/"
            element={<StatusView setIsLoading={setIsLoading} />}
          />
          <Route
            path="/warehouses"
            element={<WarehousesView setIsLoading={setIsLoading} />}
          />
          <Route
            path="*"
            element={<StatusView setIsLoading={setIsLoading} />}
          />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default App;
