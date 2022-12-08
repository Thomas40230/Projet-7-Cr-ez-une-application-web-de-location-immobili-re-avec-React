import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import AboutDatas from "../../aboutDatas.json";
import BannerAbout from "../../Assets/Banner_about.png";
import BannerAboutMobile from "../../Assets/Banner_mobile.png";
import "./About.css";

function About() {
  return (
    <section className="collapse_container">
      <Banner  url={BannerAbout} mobile={BannerAboutMobile} />
      <div className="collapse_div">
        { AboutDatas.map((datas, id) => (
        <div key={id}>
          <Collapse 
            title={datas.title}
            texte={datas.text}
          />
        </div> 
        ))}
      </div>
    </section>
  )
}

export default About;