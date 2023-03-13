import { getDocumentStatus } from 'services/api';
import s from './History.module.css';

const History = ({ documents, setDocStatus, setDocNumber, setDocuments }) => {
  const onDocClick = async e => {
    const {
      Status: status,
      WarehouseSender: sender,
      WarehouseRecipient: recipient,
    } = await getDocumentStatus(e.target.textContent);

    setDocStatus({ status, sender, recipient });
    setDocNumber(e.target.textContent);
  };

  const onBtnClick = () => {
    localStorage.removeItem('documents');
    setDocuments([]);
  };

  return (
    <aside className={s.aside}>
      <h2 className={s.title}>Історія</h2>
      <ul className={s.list}>
        {documents.length > 0 &&
          documents.map(doc => (
            <li key={doc} className={s.item} onClick={onDocClick} tabIndex="0">
              <p>{doc}</p>
            </li>
          ))}
      </ul>
      {documents.length > 0 && (
        <button type="button" onClick={onBtnClick} className={s.button}>
          Очистити історію
        </button>
      )}
    </aside>
  );
};

export default History;
