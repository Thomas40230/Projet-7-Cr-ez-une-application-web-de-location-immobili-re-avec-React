import { useState } from "react";
import "./Collapse.css";
import CollapseButton from "./../../Assets/Button.png";

function Collapse({title, texte}) {
  const [ isOpen, setIsOpen ] = useState(false);
  
  return isOpen ? (
    <article className="collapse_article">
      <div className="collapse_window">
        <h4 className="collapse_title">{title}</h4>
        <img  src={CollapseButton} 
              alt="Icon représentant un boutton" 
              className="collapse_button"
              onClick={() => setIsOpen(false)}/>
      </div>
      <div className="collapse_txt">{texte}</div>
    </article>
  ) : (
    <article className="collapse_article">
      <div className="collapse_window">
        <h4 className="collapse_title">{title}</h4>
        <img  src={CollapseButton} 
              alt="Icon représentant un boutton" 
              className="collapse_second_button"
              onClick={() => setIsOpen(true)}/>
      </div>
    </article>
  )
}

export default Collapse;