import React, { Component } from 'react';
// import {Link} from "react-router-dom";

class RegisterDoc extends Component {
    render() {
      return (
        <div className="section">
          <h1>Bienvenido Profesional</h1>
        
          <form>
            <input id="inputName" className="inputText"></input>
            <input id="inputProfession" className="inputText"></input>
            <input id="inputCI" className="inputText"></input>
            <input id="inputUserName" className="inputText"></input>
            <input id="inputPassword" className="inputText"></input>
            <button className="button">Registrarse</button>
          </form>
        </div>
      );
    }
  }
  
  export default RegisterDoc;
  