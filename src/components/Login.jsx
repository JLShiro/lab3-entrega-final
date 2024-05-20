import React from "react";
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="hero-image">
            <div className="signup">
                <span className="signup-title">Ingresa a tu cuenta</span> <br />
                <span className="login-subtitle">Empieza tu viaje...</span>
                <form className="signup-fields">
                    <input type="email" name="correo" id="correo" placeholder="E-Mail" />
                    <input type="password" name="contra" id="contra" placeholder="Contraseña" />
                    <div className="signup-final">
                        <br /><br />
                        <Link to='#'>¿Olvidaste tu Contraseña?</Link> <br />
                        <Link to='/profile'><button className="signup-button">Iniciar Sesión</button></Link>
                    </div>
                </form> <br /> <br />
                <span>¿No tienes cuenta?</span> <br />
                <Link to='/signup'>Regístrate</Link>
            </div>
        </div>
    )
}

export default Login;