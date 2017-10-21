import React, { Component } from 'react';
import p5 from 'p5';

import MapSketch from './map-sketch';
import './map.css';

export default class Map extends Component {
  componentDidMount() {
    new p5(MapSketch);
  }

  render() {
    return(
      <div id="map">
      </div>
    )
  }
}