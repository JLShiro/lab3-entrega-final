import React from "react";
import { Link } from 'react-router-dom'

function Cart() {
    return (
        <div className="cart">
            <span className="product-title">Su Orden</span>
            <div className="cart-data">
                <div className="cart-products">
                    <span className="cart-sub">Subscripción Elegida: <strong>Básico</strong></span> <br />
                    <span className="cart-sub">Sus Cervezas:</span>
                    <div className="cart-beers">
                        <div class="beer-card">
                            <img src="/img/cb-fula.jpeg" alt="Fula" className="beer-img"/>
                            <span>Fula</span>
                        </div>
                        <div class="beer-card">
                            <img src="/img/cb-fula.jpeg" alt="Fula" className="beer-img"/>
                            <span>Fula</span>
                        </div>
                        <div class="beer-card">
                            <img src="/img/rd-pils.png" alt="Pils" className="beer-img"/>
                            <span>Pils</span>
                        </div>
                        <div class="beer-card">
                            <img src="/img/rd-pils.png" alt="Pils" className="beer-img"/>
                            <span>Pils</span>
                        </div>
                        <div class="beer-card">
                            <img src="/img/cd-intriga.png" alt="Intriga" className="beer-img"/>
                            <span>Intriga</span>
                        </div>
                        <div class="beer-card">
                            <img src="/img/cd-intriga.png" alt="Intriga" className="beer-img"/>
                            <span>Intriga</span>
                        </div>
                    </div>
                    <Link to='/options' className='cart-sub'>Cambiar Orden</Link>
                </div>
                <div className="cart-totals">
                    <span className="cart-sub">Total del carrito:</span> <hr />
                    <div className="subtotal">
                        <span className="cart-sub">Subtotal</span><span className=" cart-sub cart-price">$14.99</span>
                    </div> <hr />
                    <div className="subtotal">
                        <span className="cart-sub">Envío</span><span className=" cart-sub cart-price">$0.00</span>
                    </div> <br /> <span>Envío a Panamá, Panamá</span> <br /> <Link to='#'>Cambiar Dirección</Link> <br /> <br /> <span>Envío gratis</span> <hr />
                    <div className="subtotal">
                        <span className="cart-sub">Impuesto de venta</span><span className=" cart-sub cart-price">$1.05</span>
                    </div> <hr />
                    <div className="subtotal">
                        <span className="cart-sub">Total</span><span className=" cart-sub cart-price">$16.04</span>
                    </div> <hr />
                    <Link to='/checkout'><button className="cart-checkout">Proceder a pagar</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;