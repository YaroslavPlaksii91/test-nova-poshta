import { getDocumentStatus } from 'services/api';
import s from './DocumentForm.module.css';

// 20450661810382
// 20450657887775
// 20400310879035
// 20450535060749
// 20450458741725
// 20450460017640

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
        title="Enter the document number"
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
