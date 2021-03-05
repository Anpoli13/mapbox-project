import React, { Component } from 'react';
import Map from './Map';
import './App.css';
import Toggler from './Toggler';
import Search from './Search';
import PlacesPanel from './PlacesPanel'



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      map: null,
      latitude: 40.7128,
      longitude: -74.006,
      style: 'mapbox://styles/mapbox/dark-v10',

      places: [
        // {name: "13 Crosby Street", latitude: 40.7128, longitude: -74.006},
        // {name: "14 Crosby Street", latitude: 40.7128, longitude: -74.006},
        // {name: "15 Crosby Street", latitude: 40.7128, longitude: -74.006}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Search app={this}></Search>
        <PlacesPanel app={this}></PlacesPanel>
        <Toggler app={this}></Toggler>
        <Map app={this}></Map>
      </div>
    );
  }
}

export default App;
