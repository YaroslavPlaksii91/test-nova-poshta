import { useState, useEffect } from 'react';
import { getWarehouses } from 'services/api';
import WarehousesList from 'components/WarehousesList';

const WarehousesView = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    getWarehouses().then(setWarehouses).catch(console.log);
  }, []);

  return <WarehousesList warehouses={warehouses} />;
};

export default WarehousesView;
