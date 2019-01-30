import React, { Component } from 'react';

import ButtonCounter from '../components/buttonCounter/ButtonCounter';
import MapLocations from '../components/mapLocations/MapLocations';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          React CRA training
        </header>
        <MapLocations />
        <ButtonCounter />
      </div>
    );
  }
}

export default App;
