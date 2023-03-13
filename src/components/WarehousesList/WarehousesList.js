import s from './WarehousesList.module.css';

const WarehousesList = ({ warehouses }) => {
  return (
    <section>
      {warehouses.length > 0 && (
        <ul className={s.list}>
          {warehouses.map(({ Description, Ref }) => (
            <li key={Ref} className={s.item}>
              <p>{Description}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default WarehousesList;
