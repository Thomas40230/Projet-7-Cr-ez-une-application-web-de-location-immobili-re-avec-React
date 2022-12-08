import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import FicheLogement from "./pages/FicheLogement/FicheLogement.jsx";
import Error from "./pages/Error/Error.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

const GlobalStyled = createGlobalStyle`
* {
    font-family: 'Montserrat', Helvetica, sans-serif;
}

body {
    margin: 0;
}
`

function App() {
    return (
        <div className="App">
            <GlobalStyled />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<FicheLogement />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
        </div>
    )
}

export default App;