import React, { Component } from 'react';
import Logo from "../images/logo-2.png";
import { Link } from "react-router-dom";

class RegisterPatient extends Component {
    render() {
        return (
            <div className="row section container">
                <img className="imgLogo" alt="Logo" src={Logo} />
                <form className="col s12">
                    <div className="row card-panel light-green lighten-5">
                        <h3 className="center gray-text">Bienvenido </h3>
                        <div className="input-field col s12">
                            <input type="text" id="nombre" className="validate" required />
                            <label for="nombre">Nombre y Apellido:</label>
                        </div>

                        <div className="input-field col s12">
                            <input type="number" id="teléfono" className="validate" required />
                            <label for="teléfono">Número de teléfono:</label>
                        </div>

                        <div className="input-field col s12">
                            <input type="text" id="rut" className="validate" required />
                            <label for="rut">Rut:</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="text" id="userName" className="validate" required />
                            <label for="userName">Nombre de usuario:</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="text" id="contraseña" className="validate" required />
                            <label for="contraseña">Contraseña:</label>
                        </div>
                        <Link to="/Home">
                            <button className="btn-large  black-text light-green lighten-3 waves-effect waves-light s12 m6 l6">Registrarme</button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterPatient;
