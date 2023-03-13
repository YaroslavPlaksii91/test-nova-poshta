import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StatusView from './views/StatusView';
import WarehousesView from './views/WarehousesView';
import Container from 'components/Container';
import Nav from 'components/Nav';
import './App.css';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      {isLoading && (
        <Circles
          height="80"
          width="80"
          color="orange"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
        />
      )}
      <Nav />
      <Routes>
        <Route path="/" element={<StatusView setIsLoading={setIsLoading} />} />
        <Route
          path="/warehouses"
          element={<WarehousesView setIsLoading={setIsLoading} />}
        />
        <Route path="*" element={<StatusView setIsLoading={setIsLoading} />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default App;
