import React from "react";
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div className="hero-image">
            <div className="signup">
                <span className="signup-title">Crea tu cuenta</span>
                <form className="signup-fields">
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre" />
                    <input type="text" name="apellido" id="apellido" placeholder="Apellido" />
                    <input type="email" name="correo" id="correo" placeholder="E-Mail" />
                    <input type="password" name="contra" id="contra" placeholder="Contraseña" />
                    <input type="text" placeholder="Fecha de Nacimiento" onFocus={
                                                                                (e)=> {
                                                                                    e.currentTarget.type = "date";
                                                                                    e.currentTarget.focus();
                                                                                }
                                                                            }
                                                                        onBlur={
                                                                                (e)=> {
                                                                                  e.currentTarget.type = "text";
                                                                                  e.currentTarget.blur();
                                                                                }
                                                                            }/>
                    <input type="tel" name="telefono" id="telefono" placeholder="Teléfono" />
                    <div className="signup-final">
                        <input type="checkbox" name="tc" id="tc" />
                        <label htmlFor="tc">Aceptar Términos y Condiciones</label> <br />
                        <Link to='/profile'><button className="signup-button">Registrar</button></Link>
                    </div>
                </form> <br /> <br />
                <span>¿Ya tienes cuenta?</span> <br />
                <Link to='/login'>Inicia Sesión</Link>
            </div>
        </div>
    )
}

export default SignUp;