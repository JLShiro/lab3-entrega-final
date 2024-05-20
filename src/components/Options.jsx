import React from "react"
import { Link } from "react-router-dom"

function Options() {
    return (
        <div className="catalog">
            <span className="product-title">Elija sus Cervezas</span>
            <div className="catalog-searchbar">
                <input type="text" placeholder="Buscar..."/>
            </div>
            <div className="catalog-filters">
                <span className="category-title">Filtros</span>
                <br />
                <span className="category">Cervecerías</span>
                <label>Casa Bruja
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <label>Rana Dorada
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <label>Clandestina
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <br />
                <span className="category">Estilos</span>
                <label>Lager
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <label>Ale
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <label>Ipa
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <label>Pilsner
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <label>Stout
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <label>Otros
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <br />
                <span className="category">Aromas</span>
                <label>Cítrico
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <label>Floral
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <label>Frutal
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <label>Especializado
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <label>Otros
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <br />
                <span className="category">Cuerpos</span>
                <label>Ligero
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <label>Medio
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
                <label>Completo
                  <input type="checkbox"/>
                  <span class="checkmark"></span>
                </label>
            </div>
            <div className="catalog-products">
                <div class="catalog-card selected">
                    <img src="/img/cb-fula.jpeg" alt="Fula"/>
                    <span>Fula</span>
                    <p>Disponible</p>
                </div>
                <div class="catalog-card">
                    <img src="/img/cb-fula.jpeg" alt="Fula"/>
                    <span>Fula</span>
                    <p>Disponible</p>
                </div>
                <div class="catalog-card selected">
                    <img src="/img/rd-pils.png" alt="Pils"/>
                    <span>Pils</span>
                    <p>Disponible</p>
                </div>
                <div class="catalog-card selected">
                    <img src="/img/rd-pils.png" alt="Pils"/>
                    <span>Pils</span>
                    <p>Disponible</p>
                </div>
                <div class="catalog-card ">
                    <img src="/img/cd-intriga.png" alt="Intriga"/>
                    <span>Intriga</span>
                    <p>Disponible</p>
                </div>
                <div class="catalog-card selected">
                    <img src="/img/cd-intriga.png" alt="Intriga"/>
                    <span>Intriga</span>
                    <p>Disponible</p>
                </div>
                <div class="catalog-card">
                    <img src="/img/cb-fula.jpeg" alt="Fula"/>
                    <span>Fula</span>
                    <p>Disponible</p>
                </div>
                <div class="catalog-card">
                    <img src="/img/cb-fula.jpeg" alt="Fula"/>
                    <span>Fula</span>
                    <p>Disponible</p>
                </div>
                <div class="catalog-card">
                    <img src="/img/rd-pils.png" alt="Pils"/>
                    <span>Pils</span>
                    <p>Disponible</p>
                </div>
                <div class="catalog-card">
                    <img src="/img/rd-pils.png" alt="Pils"/>
                    <span>Pils</span>
                    <p>Disponible</p>
                </div>
                <div class="catalog-card">
                    <img src="/img/cd-intriga.png" alt="Intriga"/>
                    <span>Intriga</span>
                    <p>Disponible</p>
                </div>
                <div class="catalog-card">
                    <img src="/img/cd-intriga.png" alt="Intriga"/>
                    <span>Intriga</span>
                    <p>Disponible</p>
                </div>
            </div>
            <div className="pagination" id="pagination">
                <Link to="/options">&laquo;</Link>
                <Link to="/options" className="active">1</Link>
                <Link to="/options" >2</Link>
                <Link to="/options" >3</Link>
                <Link to="/options" >4</Link>
                <Link to="/options" >5</Link>
                <Link to="/options" >6</Link>
                <Link to="/options">&raquo;</Link>
            </div>
            <div>
              <br /><Link to='/cart'><button className="hero-button">Ir al carrito de compras</button></Link>
              <p>Si se encuentra indeciso, tome nuestra encuesta especializada para autocompletar su selección de cerevezas.</p>
              <Link to='/survey'><button className="hero-button">Tomar Encuesta</button></Link>
            </div>
        </div>
    );
}

export default Options;