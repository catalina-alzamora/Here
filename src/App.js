//App.js
import React, { Component } from 'react';
// import {DisplayMapClass} from './DisplayMapClass';
import Welcome from './Views/Welcome';
import Login from './Views/Login'
import Home from './Views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegisterDoc from './Views/RegisterDoc';

class App extends Component {
    render() {
      return (
        <Router>
             <Switch>
               <Route exact path="/">
                <Welcome />
               </Route>
               <Route path="/Login">
                 <Login />
               </Route>
               <Route path="/RegisterDoc">
                <RegisterDoc />
               </Route>
               <Route path="/Home">
                 <Home />
               </Route>
             </Switch>
         </Router>
      );
    }
  }
  
  export default App;



// function App() {
// return (
//    <Welcome />
//     { /*<DisplayMapClass /> */ }

// );
// }
// export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Esta es nuestra aplicación para el coronavirus
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
