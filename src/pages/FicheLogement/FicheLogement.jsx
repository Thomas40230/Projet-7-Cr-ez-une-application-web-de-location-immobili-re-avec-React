import Carrousel from "../../components/Carrousel/Carrousel";
import LodgingInfos from "../../components/LodgingInfos/LodgingInfos";
import Collapse from "../../components/Collapse/Collapse";
import Lodgings from "../../logements.json";
import { useParams } from "react-router-dom";
import "./FicheLogement.css";
import Error404 from "../../components/Error404/Error404";

function FicheLogement() {

  const params = useParams();     // Hook permettant de récupérer les paramètres de route.

  const product = 
    Lodgings.find((product) => params.id === product.id);
    let idtmp=Lodgings.find((product) => params.id === product.id);
    console.log (idtmp)
    if (idtmp===undefined) {
      console.log ("Mauvais ID")
      return (
        <Error404 />
    )
    };
  

  const key = product.id;
  const pictures = product.pictures;
  const title = product.title;
  const location = product.location;
  const tags = product.tags;
  const host = product.host;
  const rating = product.rating;
  const description = product.description;
  const equipments = product.equipments;
    

  return (
    <main className="lodging_main">
      <Carrousel 
        key={key} 
        pictures={pictures} 
      />
      <section className="lodgings_infos_container">
        <LodgingInfos 
          key={key} 
          product={product}
          title={title} 
          location={location} 
          tags={tags}
          host={host}
          rating={rating}
        />
      </section>
      <section className="lodging_collapse_container">
        <div className="collapse_description">
          <Collapse
            title="Description"
            texte={description}
          />
        </div>
        <div className="collapse_equipments">
          <Collapse
            title="Equipements"
            texte={equipments.map((infos, index) => (
              <li className="list_equipments">{infos}</li>
            )
          )}
          />
        </div>
      </section>
    </main>
  )
}

export default FicheLogement;