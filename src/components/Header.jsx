import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <img src="./img/logo.png" alt="Logo" className="logo-img"/>
            <p className="header-text">Panama</p><p className="header-text-yellow">BeerClub</p>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/catalog">Catálogo</Link></li>
                    <li><Link to="/pricing">Precios</Link></li>
                    <li><Link to="/news">Eventos</Link></li>
                    <li><Link to="/signup">Regístrate</Link></li>
                    <li><Link to="/login" className="header-login-text">Iniciar Sesión</Link></li>
                    <li><Link to="/cart" className="shopping-cart"><i className="fa fa-shopping-cart fa-lg"></i></Link></li>
                    <li><Link to="/profile" className="shopping-cart"><i className="fa fa-user fa-lg"></i></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;