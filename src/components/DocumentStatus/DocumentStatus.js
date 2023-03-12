import s from './DocumentStatus.module.css';

const DocumentStatus = ({ info }) => {
  return (
    <>
      <p className={s.text}>
        <span className={s.title}>Статус доставки:</span> {info.status}
      </p>
      <p className={s.text}>
        <span className={s.title}>Відправлено:</span> {info.sender}
      </p>
      <p className={s.text}>
        <span className={s.title}>Отримано:</span> {info.recipient}
      </p>
    </>
  );
};

export default DocumentStatus;
