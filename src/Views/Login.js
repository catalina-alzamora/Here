import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {firebase} from '../firebase';
import Logo from "../images/logo-2.png";


class Login extends Component {
handleAuth () {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then(result => console.log(`${result.user.email} ha iniciado sesion`))
  .catch(error => console.log(`Error ${error.code}: ${error.message}`));
}
    render() {
      return (
      
        <div className="row section container">
          
           <form className="col s12">
           
          <div className="row card-panel light-green lighten-5">
          
            <img className="imgLogo" alt="Logo" src={Logo} />
            <h1>Bienvenido</h1>
            <div className="input-field col s12">
                  <input type="text" id="usuario" className="validate" required/>
                  <label for="usuario">Usuario:</label>
             </div>
             <div className="input-field col s12">
                  <input type="text" id="contraseña" className="validate" required/>
                  <label for="contraseña">Usuario:</label>
             </div>
             <Link to="/home">
             <button className="btn black-text light-green lighten-3 waves-effect waves-light s12 m12 l12">Iniciar Sesión</button>
             <button onClick={this.handleAuth} className="btn black-text light-green lighten-3 waves-effect waves-light s12 m12 l12">Iniciar con Google</button>
             </Link>
             
          </div> 
          </form>
        </div>
      );
    }
  }

  export default Login;