import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Home() {
    return (
        <div className="home">
            <div className="hero-image">
                <div className="hero-text">
                    <span className="hero-title">Cerveza Artesanal a un </span><span className="hero-title-yellow">Solo Click</span>
                    <p>Bienvenido a PanamaBeerClub. Eleva tu viaje al mundo de las cervezas artesanales con nuestro servicio de subscripción exclusivo.</p>
                    <Link to='/pricing'>
                        <button className="hero-button">Empieza Ya</button>
                    </Link>
                </div>
            </div>
            <span className="product-title">Nuestros Productos</span>
            <div className="cerveceria">
                <img src="/img/casa-bruja.png" alt="Casa Bruja" className="cb-img"/>
                <Carousel responsive={responsive}
                    >
                    <div class="card">
                        <img src="/img/cb-fula.jpeg" alt="Fula"/>
                        <span>Fula</span>
                    </div>
                    <div class="card">
                        <img src="/img/cb-fula.jpeg" alt="Fula"/>
                        <span>Fula</span>
                    </div>
                    <div class="card">
                        <img src="/img/cb-fula.jpeg" alt="Fula"/>
                        <span>Fula</span>
                    </div>
                    <div class="card">
                        <img src="/img/cb-fula.jpeg" alt="Fula"/>
                        <span>Fula</span>
                    </div>
                    <div class="card">
                        <img src="/img/cb-fula.jpeg" alt="Fula"/>
                        <span>Fula</span>
                    </div>
                </Carousel>
            </div>
            <div className="cerveceria">
                <img src="/img/rana-dorada.jpg" alt="Rana Dorada" className="rd-img"/>
                <Carousel responsive={responsive}
                    >
                    <div class="card">
                        <img src="/img/rd-pils.png" alt="Pils"/>
                        <span>Pils</span>
                    </div>
                    <div class="card">
                        <img src="/img/rd-pils.png" alt="Pils"/>
                        <span>Pils</span>
                    </div>
                    <div class="card">
                        <img src="/img/rd-pils.png" alt="Pils"/>
                        <span>Pils</span>
                    </div>
                    <div class="card">
                        <img src="/img/rd-pils.png" alt="Pils"/>
                        <span>Pils</span>
                    </div>
                    <div class="card">
                        <img src="/img/rd-pils.png" alt="Pils"/>
                        <span>Pils</span>
                    </div>
                </Carousel>
            </div>
            <div className="cerveceria">
                <img src="/img/clandestina.png" alt="Casa Bruja" className="cd-img"/>
                <Carousel responsive={responsive}
                    >
                    <div class="card">
                        <img src="/img/cd-intriga.png" alt="Intriga"/>
                        <span>Intriga</span>
                    </div>
                    <div class="card">
                        <img src="/img/cd-intriga.png" alt="Intriga"/>
                        <span>Intriga</span>
                    </div>
                    <div class="card">
                        <img src="/img/cd-intriga.png" alt="Intriga"/>
                        <span>Intriga</span>
                    </div>
                    <div class="card">
                        <img src="/img/cd-intriga.png" alt="Intriga"/>
                        <span>Intriga</span>
                    </div>
                    <div class="card">
                        <img src="/img/cd-intriga.png" alt="Intriga"/>
                        <span>Intriga</span>
                    </div>
                </Carousel>
            </div>
        </div> 
    )
}

export default Home;