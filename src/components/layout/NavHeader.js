import { NavLink } from 'react-router-dom';
import classes from './NavHeader.module.css';

const NavHeader = () => (
  <>
    <nav>
      <div>Book Store</div>
      <ul>
        <li>
          <NavLink
            to="/books"
            className={(data) => (data.isActive ? classes.active : '')}
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category"
            className={(data) => (data.isActive ? classes.active : '')}
          >
            Category
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default NavHeader;
