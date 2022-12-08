import Logo from "../../Assets/Logo_footer.png";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <figure>
                <img className="footer_logo" src={Logo} alt="Logo de l'agence Kasa"/>
            </figure>
            <p className="footer_txt">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;