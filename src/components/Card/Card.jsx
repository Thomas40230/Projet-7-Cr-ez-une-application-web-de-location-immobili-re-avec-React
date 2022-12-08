import "./Card.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types"
import Lodgings from "../../logements.json";

function Card() {

  const [ lodgings ] = useState(Lodgings); // Hook permettant d'avoir des variables d'état dans les composants fonctionnels.

  return (
    <section className="gallery">
    {lodgings.map((lodging) => (
      <Link to={`/logement/${lodging.id}` } key={lodging.id} className="card_link">
        <div className="card_figure">
          <img 
            className="card_img" 
            src={lodging.cover} 
            alt="Illustration du logement"
          />
          <div className="card_title">
            <strong>
              {lodging.title}
            </strong>
          </div>
        </div>
      </Link>
    ))}
    </section>      
  )
}

export default Card;

// Proptype permet de définir le type de chaques props
Card.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
}