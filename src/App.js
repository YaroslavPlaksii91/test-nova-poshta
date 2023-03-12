import { Routes, Route } from 'react-router-dom';
import StatusView from './views/StatusView';
import WarehousesView from './views/WarehousesView';
import Container from 'components/Container';
import Nav from 'components/Nav';
import './App.css';

export const App = () => {
  return (
    <Container>
      <Nav />
      <Routes>
        <Route path="/" element={<StatusView />} />
        <Route path="/warehouses" element={<WarehousesView />} />
        <Route path="*" element={<StatusView />} />
      </Routes>
    </Container>
  );
};

export default App;
