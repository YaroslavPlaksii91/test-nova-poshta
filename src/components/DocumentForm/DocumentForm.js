import { toast } from 'react-toastify';
import { getDocumentStatus } from 'services/api';
import Button from 'components/Button';
import s from './DocumentForm.module.css';

const DocumentForm = ({
  docNumber,
  documents,
  setDocNumber,
  setDocStatus,
  addNewDocument,
  setIsLoading,
}) => {
  const handleChange = e => {
    setDocNumber(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const regex = /^\d{14}$/;
    const isValid = regex.test(docNumber);

    if (!isValid) return toast.warn('Номер повинен містити 14 цифр');

    if (documents.includes(docNumber)) return toast.warn('Документ вже існує');

    setIsLoading(true);
    const {
      Status: status,
      WarehouseSender: sender,
      WarehouseRecipient: recipient,
    } = await getDocumentStatus(docNumber);

    setDocStatus({ status, sender, recipient });
    addNewDocument(docNumber);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor="documentNumber"></label>
      <input
        id="documentNumber"
        type="text"
        name="documentNumber"
        title="Введіть номер накладної"
        required
        value={docNumber}
        onChange={handleChange}
      />

      <Button type={'submit'} width={150}>
        Get status TTN
      </Button>
    </form>
  );
};

export default DocumentForm;
