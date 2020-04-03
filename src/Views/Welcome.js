import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import './welcome.css'
import Logo from "../images/logo-2.png";



class Welcome extends Component {
  render() {
    return (
      <div className="row section container">
        



        <div className="card light-green lighten-5">
          <div className="imageDiv">
          
          <img className="imgLogo" alt="Logo" src={Logo} /> 
          </div>
        
          <div className="card-content center">
          
            <h1 className="col s12 m12 l12">Bienvenido</h1>
            <Link to="/RegisterDoc">
              <button className="sideBtn btn black-text   light-green lighten-3 waves-effect  s12 m6 l6">Soy Profesional</button>
            </Link>
            <Link to="/RegisterPatient">
              <button className="sideBtn btn black-text light-green lighten-3 waves-effect waves-light s12 m6 l6">Soy Paciente</button>
            </Link>
            <div className="link s12 m12 l12">
              <a href="/Login">Ya estoy registrado</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
