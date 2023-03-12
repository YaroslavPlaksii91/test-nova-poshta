import s from './WarehousesList.module.css';

const WarehousesList = ({ warehouses }) => {
  return (
    warehouses.length > 0 && (
      <ul className={s.list}>
        {warehouses.map(({ Description, Ref }) => (
          <li key={Ref} className={s.listItem}>
            <p>{Description}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default WarehousesList;

// Description: 'Відділення №1: вул. Микулинецька, 46, прим. 1';
// CityDescription: 'Тернопіль';
// SettlementAreaDescription: 'Тернопільська область';
// SettlementTypeDescription: 'місто';
// CategoryOfWarehouse: 'Branch';
