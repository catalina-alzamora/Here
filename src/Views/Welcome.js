import React, { Component } from 'react';
import {Link} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import './welcome.css'


class Welcome extends Component {
  render() {
    return (
      <div id="BackgroundColor"
        className="section container">
        <h1>Bienvenido a App Salud</h1>
        <Link to="/RegisterDoc"> 
        <button className="button">Soy Profesional de Salud</button>
        </Link> 

        <button className="button">Soy Paciente</button>
        
        <Link to="/Login"> 
        <a href="">Ya estoy registrado</a>
        </Link>
      </div>
    );
  }
}

export default Welcome;

