import { useState } from 'react';
import { getWarehouses } from 'services/api';
import s from './CityForm.module.css';

const CityForm = ({ setWarehouses }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const warehouses = await getWarehouses(query);

    setWarehouses(warehouses);
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

      <button type="submit" className={s.button}>
        Пошук
      </button>
    </form>
  );
};

export default CityForm;
