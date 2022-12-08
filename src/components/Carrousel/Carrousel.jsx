import { useState } from "react";
import PreviousArrow from "../../Assets/Precedent.png";
import NextArrow from "../../Assets/Suivant.png";
import "./Carrousel.css";

function Carrousel({ pictures }) {
  const [current, setCurrent] = useState(0);  // Hook permettant d'avoir des variables d'état dans les composants fonctionnels.
  const length = pictures.length;

  const nextPicture = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };  // Fonction pour revenir à la première photo

  const previousPicture = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };  // Fonction pour revenir à la dernière photo
    
  return (
    <section className="section_carrousel">
      <div className="img_container">
        <img 
          key={pictures.id}
          className="img_carrousel" 
          src={pictures[current]} 
          alt={pictures.title} 
        />
      </div>
      <img 
      // Si, le nombre de photo = 1, alors, la classeName qui enlève l'élément est activée.
        className={ length === 1 ? "previous_arrow_none" : "previous_arrow" } 
        onClick={previousPicture} 
        src={PreviousArrow} 
        alt="Illustration précédente" 
      />
      <div className={ length === 1 ? "slip_carrousel_none" : "slip_carrousel" }>
        <span>
          {current + 1} / {length}
        </span>
      </div>
      <img 
        className={ length === 1 ? "next_arrow_none" : "next_arrow" } 
        onClick={nextPicture} 
        src={NextArrow} 
        alt="Illustration suivante" 
      />
    </section>
  )
}

export default Carrousel;