import React from 'react'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <div className='pricing'>
        <span className='product-title'>Planes y Precios</span> <br />
        <span className="pricing-subtitle">Planes de Subscripción para tus Necesidades</span>
        <div className="pricing-container">
            <div className="pricing-sub">
                <span className='pricing-header'>Básico</span>
                <span className="pricing-prices">$14.99 por Entrega</span>
                <ul>
                    <li>6 Cervezas Artesanales</li>
                    <li>20+ Variedades de Cervezas Artesanales</li>
                </ul>
                <Link to='/options'><button className='pricing-button'>Comprar</button></Link>
            </div>
            <div className="pricing-sub most-popular">
                <span className='popular-header'><i class="fa fa-star"></i> Más Popular</span> <br />
                <span className='pricing-header no-margin-top'>Experto</span>
                <span className="pricing-prices">$29.99 por Entrega</span>
                <ul>
                    <li>12 Cervezas Artesanales</li>
                    <li>20+ Variedades de Cervezas Artesanales</li>
                    <li>Mercancía</li>
                    <li>Brochures Informativos</li>
                </ul>
                <Link to='/options'><button className='pricing-button'>Comprar</button></Link>
            </div>
            <div className="pricing-sub">
                <span className='pricing-header'>Guru</span>
                <span className="pricing-prices">$49.99 por Entrega</span>
                <ul>
                    <li>24 Cervezas Artesanales</li>
                    <li>20+ Variedades de Cervezas Artesanales</li>
                    <li>Mercancía</li>
                    <li>Brochures Informativos</li>
                    <li>Recompensas Especiales</li>
                </ul>
                <Link to='/options'><button className='pricing-button'>Comprar</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Pricing;