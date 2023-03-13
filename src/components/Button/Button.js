import s from './Button.module.css';

const Button = ({ type, width, children, onClick }) => (
  <button
    type={type}
    className={s.button}
    onClick={onClick}
    style={{ width: width }}
  >
    {children}
  </button>
);

export default Button;
