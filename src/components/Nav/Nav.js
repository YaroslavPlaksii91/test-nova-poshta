import { Link } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => (
  <nav className={s.nav}>
    <Link to="/" className={s.link}>
      Перевірити ТТН
    </Link>
    <Link to="/warehouses" className={s.link}>
      Список відділень
    </Link>
  </nav>
);

export default Nav;
