import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => isActive ? 'active-link' : '';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/createForm" >Home </NavLink></li>
        <li><NavLink to="/" className={activeLink({ isActive: true })}>create new form</NavLink></li>
        <li><NavLink to="/posts" className={activeLink({ isActive: true })}>Posts</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
