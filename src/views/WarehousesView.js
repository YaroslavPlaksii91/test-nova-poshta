import { useState, useEffect } from 'react';
import { getWarehouses } from 'services/api';
import WarehousesList from 'components/WarehousesList';
import CityForm from 'components/CityForm';

const WarehousesView = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    getWarehouses().then(setWarehouses).catch(console.log);
  }, []);

  return (
    <>
      <CityForm setWarehouses={setWarehouses} />
      <WarehousesList warehouses={warehouses} />
    </>
  );
};

export default WarehousesView;
