import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-grid">
                <div className="footer-logo"><img src="./img/logo-slogan-blk.png" alt="Logo Slogan" className="footer-logo"/></div>
                <div className="footer-left">
                    <span className="footer-title">Sobre Nosotros</span>
                    <p><Link to="/aboutus">Nuestra Empresa</Link></p>
                    <p><Link to="/">Preguntas Frecuentes</Link></p>
                    <p><Link to="/">Términos y Condiciones</Link></p>
                    <p><Link to="/">Políticas de Privacidad</Link></p>
                </div>
                <div className="footer-center">
                    <span className="footer-title">Servicios</span>
                    <p><Link to="/catalog">Catálogo</Link></p>
                    <p><Link to="/pricing">Precios</Link></p>
                    <p><Link to="/signup">Regístrate</Link></p>
                    <p><Link to="/login">Iniciar Sesión</Link></p>
                </div>
                <div className="footer-right">
                    <span className="footer-title">Contáctenos</span>
                    <p><i className="fa fa-whatsapp"></i>Whatsapp: 6666-6666</p>
                    <p><i className="fa fa-phone"></i>Teléfono: 222-2222</p>
                    <p><i className="fa fa-envelope"></i>Correo: contact@panamabeerclub.com</p>
                </div>
            </div>
            <p>© {new Date().getFullYear()} PanamaBeerClub - Todos los
derechos reservados</p>
        </footer>
    );
}

export default Footer;