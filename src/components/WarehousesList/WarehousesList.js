import s from './WarehousesList.module.css';

const WarehousesList = ({ warehouses }) => {
  return (
    <section>
      {warehouses.length > 0 ? (
        <ul className={s.list}>
          {warehouses.map(({ Description, Ref }) => (
            <li key={Ref} className={s.item}>
              <p>{Description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.error}>
          Дані відсутні. Перевірте чи немає помилок у назві населеного пункту.
        </p>
      )}
    </section>
  );
};

export default WarehousesList;
