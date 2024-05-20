import React from 'react';
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div className="profile">
            <span className="product-title">Tu Perfil</span>
            <div className="user-data">
                <img src="/img/user.png" alt="Foto" className='pfp' />
                <ul>
                    <li>Nombre:</li>
                    <li>Apellido:</li>
                    <li>E-Mail:</li>
                    <li>Fecha de Nacimiento:</li>
                    <li>Teléfono:</li>
                </ul>
            </div>
            <button className='profile-button'>Editar Perfil</button>
            <Link to='/'><button className='profile-button logout'>Cerrar Sesión</button></Link>
        </div>
    )
}

export default Profile;