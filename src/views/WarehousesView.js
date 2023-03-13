import { useState, useEffect, useRef } from 'react';
import { getWarehouses } from 'services/api';
import WarehousesList from 'components/WarehousesList';
import CityForm from 'components/CityForm';

const WarehousesView = ({ setIsLoading }) => {
  const [warehouses, setWarehouses] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsLoading(true);
    getWarehouses()
      .then(setWarehouses)
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <CityForm setWarehouses={setWarehouses} setIsLoading={setIsLoading} />
      <WarehousesList warehouses={warehouses} />
    </>
  );
};

export default WarehousesView;
