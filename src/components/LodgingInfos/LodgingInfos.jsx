import "./LodgingInfos.css";
import FullStar from "../../Assets/Full_star.png";
import EmptyStar from "../../Assets/Empty_star.png";

function LodgingInfos({ product, title, location, tags, host, rating }) {

  const lodgingRating = []    // Tableau qui vas contenir notre notation.

  for(let x = 0; x < rating; x++) {       // Boucle permettant de rajouter autant d'étoiles pleines que la notation.
    lodgingRating.push(
      <img
        key={product.id + x}
        className="rating_stars"
        src={FullStar}
        alt= "Etoile acquise du logement pour la notation"
      />
    );
  };

  for(let i = lodgingRating.length; i < 5; i++) {     // Boucle permettant de rajouter des étoiles vide égale à la différence entre la valeur de la notation et 5.
    lodgingRating.push(
      <img
        key={product.id + i}
        className="rating_stars"
        src={EmptyStar}
        alt= "Etoile manquante du logement pour la notation"
      />
    );  
  };

  return (
    <div className="div_infos">
      <article className="article_infos">
        <h1 className="title_infos">
          {title}
        </h1>
        <h2 className="location_infos">
          {location}
        </h2>
        <div className="tags_container">
          {tags.map((tagsData) => (
            <p key={tagsData+tags.id} className="tags_infos">{tagsData}</p>
          ))}
        </div>
      </article>
      <article className="article_host">
        <div className="host_div">
          <h2 className="host_name">
            {host.name}
          </h2>
          <img className="host_picture" src={host.picture} alt="Propriétaire de la location"/>
        </div>
        <div className="rating_div">
          {lodgingRating}
        </div>
      </article>
    </div>
  )
}

export default LodgingInfos;