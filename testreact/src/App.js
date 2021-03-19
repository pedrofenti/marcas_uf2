import React, { Component } from 'react'; //importa React y el componente del modulo
import logo from './logo.svg'; //importa una imagen en .svg (formato vectorial)
import './App.css'; //importa el css para App.js

class App extends Component { //clase App que hereda de Component
  render() {
    return (
      <div className="App"> //className para q no colisione con class
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> // usamos llaves para usar variables
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App; //exportar este modulo como App
