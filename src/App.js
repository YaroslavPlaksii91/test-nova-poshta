import { Routes, Route, Link } from 'react-router-dom';
import StatusView from './views/StatusView';
import WarehousesView from './views/WarehousesView';
import './App.css';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Перевірити ТТН</Link>
        <Link to="/warehouses">Список відділень</Link>
      </nav>

      <Routes>
        <Route path="/" element={<StatusView />} />
        <Route path="/warehouses" element={<WarehousesView />} />
        <Route path="*" element={<StatusView />} />
      </Routes>
    </div>
  );
};

export default App;
