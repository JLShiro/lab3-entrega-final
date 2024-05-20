import React from "react";

function AboutUs() {
    return (
        <div className="aboutus">
            <span className="product-title">Nuestra Empresa</span>
            <div className="mision">
                <img src="/img/foto1.png" alt="Cerveza" className="mision-img" />
                <span className="mision-title">Misión</span>
                <p className="mision-text">Proporcionar un servicio de entrega rápido y eficiente, asegurando que cada cliente reciba sus cervezas favoritas en perfectas condiciones. Nos comprometemos a promover la cultura cervecera, educando a nuestros clientes sobre las diferentes marcas y estilos disponibles. Además, trabajamos en colaboración con las cervecerías para apoyar su crecimiento y alcance.</p>
            </div>
            <div className="vision">
                <img src="/img/foto2.png" alt="Cerveza" className="vision-img" />
                <span className="vision-title">Visión</span>
                <p className="vision-text">Ser la opción preferida para los amantes de la cerveza artesanal, ofreciendo una amplia variedad de marcas de alta calidad y entregándolas directamente a la puerta de nuestros clientes. Queremos ser reconocidos como el socio confiable que lleva la experiencia cervecera a cada hogar.</p>
            </div>
        </div>
    )
}

export default AboutUs;