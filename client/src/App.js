//
//
import React, { Component } from 'react';

import axios from 'axios';

export default class App extends Component {
  //
  componentDidMount() {
    axios.get('/api/users').then(response => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <>
        <h1>Hello Bozo</h1>
      </>
    );
  }
}

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Bozo
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
