import { useState } from 'react';
import { getWarehouses } from 'services/api';
import Button from 'components/Button';
import s from './CityForm.module.css';

const CityForm = ({ setWarehouses, setIsLoading }) => {
  const [query, setQuery] = useState('Київ');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const warehouses = await getWarehouses(query);

      setWarehouses(warehouses);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor="query">Населений пункт</label>
      <input
        id="query"
        type="text"
        name="query"
        pattern="[а-яА-ЯіІїЇґҐ]*"
        title="Введіть назву населеного пункту"
        required
        value={query}
        onChange={handleChange}
      />

      <Button type={'submit'} width={100}>
        Пошук
      </Button>
    </form>
  );
};

export default CityForm;
