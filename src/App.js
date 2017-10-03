import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ConferencesContainer from './components/conferences/Container';
import TalksContainer from './components/talks/Container';
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/" render={()=> <h1>Welcome Home</h1>} />
        <ConferencesContainer />
        <TalksContainer />
      </div>
    );
  }
}

export default App;
