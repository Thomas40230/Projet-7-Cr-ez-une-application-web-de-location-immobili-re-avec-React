import Logo from "../../Assets/Logo.png";
import Nav from "../Nav/Nav";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <figure>
                <img className="header_logo" src={Logo} alt="Logo de l'agence Kasa" />
            </figure>
            <Nav />
        </header>
    )
}

export default Header;