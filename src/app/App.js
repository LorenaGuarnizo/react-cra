import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Countries from "./countries/Countries";
import Counter from "./counter/Counter";

import "./App.scss";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" />
      <Route path="/counter" component={Counter} />
      <Route path="/countries" component={Countries} />
    </div>
  </Router>
);

export const Header = () => (
  <div className="app">
    <div className="app-container">
      <header className="app-header">React CRA training</header>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/countries">Countries</Link>
      </li>
    </ul>
  </div>
);

export default App;
