import { useState, useEffect, useRef } from 'react';
import DocumentForm from 'components/DocumentForm';
import DocumentStatus from 'components/DocumentStatus';
import History from 'components/History';
import s from './StatusView.module.css';

const StatusView = ({ setIsLoading }) => {
  const [docNumber, setDocNumber] = useState('');
  const [info, setInfo] = useState('');
  const [documents, setDocuments] = useState(
    () => JSON.parse(localStorage.getItem('documents')) ?? []
  );
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem('documents', JSON.stringify(documents));
  }, [documents]);

  const setDocStatus = docStatus => {
    setInfo(docStatus);
  };

  const addNewDocument = newDoc => {
    if (documents.includes(newDoc)) return;
    setDocuments([...documents, newDoc]);
  };

  return (
    <>
      <DocumentForm
        docNumber={docNumber}
        setDocNumber={setDocNumber}
        setDocStatus={setDocStatus}
        addNewDocument={addNewDocument}
        setIsLoading={setIsLoading}
      />
      <div className={s.wrapper}>
        {info && <DocumentStatus info={info} />}
        <History
          documents={documents}
          setDocStatus={setDocStatus}
          setDocNumber={setDocNumber}
          setDocuments={setDocuments}
          setIsLoading={setIsLoading}
        />
      </div>
    </>
  );
};

export default StatusView;
