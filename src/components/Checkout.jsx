import React from "react";
import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <div className="cart">
            <span className="product-title">Su Orden</span>
            <div className="cart-data">
                <form className="checkout-billing">
                    <span className="cart-sub"><strong>1. Información de Contacto</strong></span> <br />
                    <input type="email" name="correo" id="correo" placeholder="Correo Electrónico"/> <br />
                    <span className="cart-sub"><strong>2. Dirección de Envío</strong></span> <br />
                    <div className="checkout-name">
                        <input type="text" name="nombre" id="nombre" placeholder="Nombre" /><input type="text" name="apellido" id="apellido" placeholder="Apellido" />
                    </div>
                    <input type="text" name="direccion" id="direccion" placeholder="Dirección" />
                    <input type="text" name="ph" id="ph" placeholder="Apartamento, suite, etc. (opcional)" />
                    <div className="checkout-name">
                        <input type="text" name="ciudad" id="ciudad" placeholder="Ciudad" /><input type="text" name="provincia" id="provincia" placeholder="Provincia" />
                    </div>
                    <div className="checkout-name">
                        <input type="text" name="codpostal" id="codpostal" placeholder="Código Postal"/> <input type="tel" name="telefono" id="telefono" placeholder="Teléfono (opcional)" />
                    </div>
                    <span className="cart-sub"><strong>3. Opciones de Envío</strong></span> <br />
                    <div className="subtotal shipping">
                        <span>Envío Gratis</span> <span>$0.00</span>
                    </div> <br />
                    <span className="cart-sub"><strong>4. Método de Pago</strong></span> <br />
                    <form className="payment-method">
                        <input type="radio" name="answer" id="op1" />
                        <label htmlFor="op1"> <i className="fa fa-paypal"></i> Paypal</label> <br />
                        <input type="radio" name="answer" id="op2" />
                        <label htmlFor="op2"> <i className="fa fa-credit-card"></i> Tarjeta de Crédito</label> <br />
                        <input type="radio" name="answer" id="op3" />
                        <label htmlFor="op3"> <i className="fa fa-credit-card"></i> Tarjeta de Débito</label> <br />
                        <input type="radio" name="answer" id="op4" />
                        <label htmlFor="op4"> <i className="fa fa-money"></i> Yappy</label> <br />
                    </form>
                    <p className="cart-sub disclaimer">Al proceder con su compra, estaría de acuerdo con nuestros Términos y Condiciones y Políticas de Privacidad</p> <hr />
                    <div className="subtotal">
                        <Link to='/cart'><i className="fa fa-arrow-left"></i> Regresar al carrito</Link>
                        <Link to='#'><button className="cart-checkout">Completar Orden</button></Link>
                    </div>
                </form>
                <div className="cart-totals">
                    <span className="cart-sub">Resumen de la Orden</span> <hr />
                    <div className="checkout-summary">
                    <span className="cart-sub">Subscripción Elegida: <strong>Básico</strong></span> <br />
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
                    <div className="subtotal">
                        <span className="cart-sub">Subtotal</span><span className=" cart-sub cart-price">$14.99</span>
                    </div> <hr />
                    <div className="subtotal">
                        <span className="cart-sub">Envío</span><span className=" cart-sub cart-price">$0.00</span>
                    </div> <span>Envío gratis</span> <br /> <br /> <span>Envío a Panamá, Panamá</span> <br /> <hr />
                    <div className="subtotal">
                        <span className="cart-sub">Impuesto de venta</span><span className=" cart-sub cart-price">$1.05</span>
                    </div> <hr />
                    <div className="subtotal">
                        <span className="cart-sub">Total</span><span className=" cart-sub cart-price">$16.04</span>
                    </div> <hr />
                </div>
            </div>
        </div>
    )
}

export default Checkout;