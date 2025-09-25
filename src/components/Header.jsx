// Header (Enête + logo + navigation)
import { NavLink } from "react-router-dom";
import logo from "../../public/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header__logo" />

      <nav className="header__nav" aria-label="Navigation principale">
        <NavLink to="/" end className="header__link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="header__link">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
