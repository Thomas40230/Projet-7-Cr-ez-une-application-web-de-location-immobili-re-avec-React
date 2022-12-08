import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import BannerImg from "../../Assets/Banner_img.png";
import "./Home.css";

function Home() {
  
  return (
  <main className="home_main">
    <Banner url={BannerImg} />
    <Card />
  </main>
  )
}



export default Home;