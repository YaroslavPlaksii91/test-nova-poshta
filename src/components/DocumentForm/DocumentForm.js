import { getDocumentStatus } from 'services/api';
import s from './DocumentForm.module.css';

const DocumentForm = ({
  docNumber,
  setDocNumber,
  setDocStatus,
  addNewDocument,
}) => {
  const handleChange = e => {
    setDocNumber(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const {
      Status: status,
      WarehouseSender: sender,
      WarehouseRecipient: recipient,
    } = await getDocumentStatus(docNumber);

    setDocStatus({ status, sender, recipient });
    addNewDocument(docNumber);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor="documentNumber"></label>
      <input
        id="documentNumber"
        type="text"
        name="documentNumber"
        pattern="[0-9]{14}"
        title="Введіть номер накладної"
        required
        value={docNumber}
        onChange={handleChange}
      />

      <button type="submit" className={s.button}>
        Get status TTN
      </button>
    </form>
  );
};

export default DocumentForm;
