import React, { Component } from 'react';
// import {Link} from "react-router-dom";

class RegisterDoc extends Component {
    render() {
      return (
        <div className="row section container">      
            <form className="col s12">
              <div className="row card-panel light-green lighten-5">
                <h3 className="center gray-text">Bienvenido Profesional </h3>
                <div className="input-field col s12">
                  <input type="text" id="nombre" className="validate" required/>
                  <label for="nombre">Nombre y Apellido:</label>
                </div>

                <div className="input-field col s12">
                  <input type="text" id="profesion" className="validate" required/>
                  <label for="profesion">Profesión:</label>
                </div>

                <div className="input-field col s12">
                  <input type="text" id="rut" className="validate" required/>
                  <label for="rut">Rut:</label>
                </div>
                <div className="input-field col s12">
                  <input type="text" id="contraseña" className="validate" required/>
                  <label for="contraseña">Contraseña:</label>
                </div>
                <button className="btn-large  black-text light-green lighten-3 waves-effect waves-light s12 m6 l6">Registrarme</button>
              </div>
            </form>
          </div>
      );
    }
  }
  
  export default RegisterDoc;
  