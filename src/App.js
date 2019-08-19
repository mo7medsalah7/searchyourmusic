import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {Switch, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import SearchTrack from './components/SearchTrack';
import Lyrics from './components/Lyrics';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/lyrics/track/:track_id" component={Lyrics} />
        </Switch>
      </div>
    );
  }
}

export default App;
