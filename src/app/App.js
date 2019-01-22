import React, { Component } from 'react';

import Button from '../components/button/Button';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          React CRA training
        </header>
        <Button />
      </div>
    );
  }
}

export default App;
