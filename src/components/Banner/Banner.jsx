import "./Banner.css";

function Banner(props) {
    if (props.mobile) {
       return ( 
       <section className="banner_about">
       <div className="banner_about_div">
         <img className="banner_about_img" src={props.url} alt="Bannière du site de l'agence Kasa" />
         <img className="banner_about_img_mobile" src={props.mobile} alt="Bannière du site de l'agence Kasa mobile" />
       </div>   
     </section>)
    } else {
        return (
            <section className="banner_home">
                <div className="banner_div">
                    <img className="banner_img" src={props.url} alt="Bannière du site de l'agence Kasa" />
                </div>   
                <p className="banner_txt">Chez vous, <span className="banner_undertxt"> partout et ailleurs</span></p>
            </section>
        )
    }
}

export default Banner;