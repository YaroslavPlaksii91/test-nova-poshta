import { useState, useEffect } from 'react';
import { getWarehouses } from 'services/api';
import WarehousesList from 'components/WarehousesList';
import CityForm from 'components/CityForm';

const WarehousesView = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [query, setQuery] = useState('Київ');

  useEffect(() => {
    getWarehouses(query).then(setWarehouses).catch(console.log);
  }, [query]);

  return (
    <>
      <CityForm
        setQuery={setQuery}
        query={query}
        setWarehouses={setWarehouses}
      />
      <WarehousesList warehouses={warehouses} />
    </>
  );
};

export default WarehousesView;
