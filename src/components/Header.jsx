// Header (Enête + logo + navigation)
import { NavLink } from "react-router-dom";
import logo from "../../public/logo.png";

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <img src={logo} alt="Kasa" className="logo" />

      {/* Navigation */}
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
