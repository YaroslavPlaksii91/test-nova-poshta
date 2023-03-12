import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => (
  <header>
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Перевірити ТТН
      </NavLink>
      <NavLink
        to="/warehouses"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Список відділень
      </NavLink>
    </nav>
  </header>
);

export default Nav;
