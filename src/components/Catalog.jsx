import React from "react"
import { Link } from "react-router-dom"

function Catalog() {
    return (
        <div className="catalog">
            <span className="product-title">Catálogo de Productos</span>
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
                <Link to="/catalog">&laquo;</Link>
                <Link to="/catalog" className="active">1</Link>
                <Link to="/catalog" >2</Link>
                <Link to="/catalog" >3</Link>
                <Link to="/catalog" >4</Link>
                <Link to="/catalog" >5</Link>
                <Link to="/catalog" >6</Link>
                <Link to="/catalog">&raquo;</Link>
            </div>
        </div>
    );
}

export default Catalog;