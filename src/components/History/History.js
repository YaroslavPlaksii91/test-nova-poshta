import { FcEmptyTrash } from 'react-icons/fc';
import { getDocumentStatus } from 'services/api';
import s from './History.module.css';

const History = ({
  documents,
  setDocStatus,
  setDocNumber,
  setDocuments,
  setIsLoading,
}) => {
  const onDocClick = async e => {
    setIsLoading(true);
    const {
      Status: status,
      WarehouseSender: sender,
      WarehouseRecipient: recipient,
    } = await getDocumentStatus(e.target.textContent);

    setDocStatus({ status, sender, recipient });
    setDocNumber(e.target.textContent);
    setIsLoading(false);
  };

  const onBtnClick = () => {
    localStorage.removeItem('documents');
    setDocuments([]);
  };

  const onDelete = e => {
    const docNum = e.target.parentNode.previousSibling.textContent;
    const filteredDocs = documents.filter(doc => doc !== docNum);

    setDocuments([...filteredDocs]);
  };

  return (
    <aside className={s.aside}>
      <h2 className={s.title}>Історія</h2>
      <ul className={s.list}>
        {documents.length > 0 &&
          documents.map(doc => (
            <li key={doc} className={s.item}>
              <p className={s.itemText} tabIndex="0" onClick={onDocClick}>
                {doc}
              </p>
              <FcEmptyTrash
                className={s.icon}
                tabIndex="0"
                title="Видалити з історії"
                onClick={onDelete}
              />
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
