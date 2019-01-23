import React, { Component } from 'react';

import ButtonCounter from '../components/buttonCounter/ButtonCounter';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          React CRA training
        </header>
        <ButtonCounter />
      </div>
    );
  }
}

export default App;
