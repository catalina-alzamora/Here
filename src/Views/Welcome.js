import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import './welcome.css'


class Welcome extends Component {
  render() {
    return (
      <div className="row section container">

      
      <div className="card light-green lighten-5">
        <div className="card-content center">
        <h1 className="col s12 m12 l12">Bienvenido a App Salud</h1>
        <Link to="/RegisterDoc"> 
        <button className="btn black-text   light-green lighten-3 waves-effect  s12 m6 l6">Soy Profesional de Salud</button>
        </Link> 
        <button className="btn black-text light-green lighten-3 waves-effect waves-light s12 m6 l6">Soy Paciente</button>
        <div className="link s12 m12 l12">
        <Link to="/Login"> 
        <a href="">Ya estoy registrado</a>
        </Link>
        </div>
        
        </div>
      </div>
      </div>
    );
  }
}

export default Welcome;

