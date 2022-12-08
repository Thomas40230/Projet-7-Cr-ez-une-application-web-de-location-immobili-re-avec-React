import { NavLink } from "react-router-dom"; // Import des link pour pouvoir naviguer à l'intérieur de mon application.
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul className="nav_list">
        <li>
          <NavLink 
            to="/" 
            // IsActive est une fonction pour ajouter une logique supplémentaire pour déterminer si le lien est actif.
            className={({isActive}) => {    
              return isActive ? "nav_link_active" : "nav_link"; }}
            >Accueil
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({isActive}) => {
              return isActive ? "nav_link_active" : "nav_link"; }}
            >A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;