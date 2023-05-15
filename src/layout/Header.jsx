import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.png';

function Header() {
  return (
    <header className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="Logo de Kasa" className="navbar__img"/>
      </NavLink>
      <nav className="navbar__link">
        <NavLink to="/" className={({isActive}) => isActive ? "navbar__link--active" : "navbar__link--inactive"}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "navbar__link--active" : "navbar__link--inactive"}>
          A propos
        </NavLink>
      </nav>
    </header>
  )
};

export default Header;