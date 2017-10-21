import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './App.css';

import Map from './components/map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>represent! by gitconnected.com</title>
          <link href='https://api.mapbox.com/mapbox-gl-js/v0.40.0/mapbox-gl.css' rel='stylesheet' />
        </Helmet>
        <Map />
      </div>
    );
  }
}

export default App;
