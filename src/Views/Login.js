import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {firebase} from '../firebase';

class Login extends Component {
handleAuth () {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then(result => console.log(`${result.user.email} ha iniciado sesion`))
  .catch(error => console.log(`Error ${error.code}: ${error.message}`));
}
    render() {
      return (
        <div className="section">
          <h1>Bienvenido</h1>
        
          <form>
        
            <input id="inputUserName" className="inputText" placeholder="Usuario"></input>
            <input id="inputPassword" className="inputText" placeholder="Password"></input>
            <Link to="/Home">
            <button>Iniciar Sesion</button>
            <button onClick={this.handleAuth}>Login con Google</button>
            </Link>
          </form>
        </div>
      );
    }
  }

  export default Login;