import React, { Component } from 'react';
import mapbox from 'mapbox-gl';
import './Map.css'

class Map extends Component {

    componentDidMount() {
        const app = this.props.app
        mapbox.accessToken = 'pk.eyJ1IjoiYW5wb2xpIiwiYSI6ImNrbHRpdGN3djI2bm8ybm4xaXN6czgwaTEifQ.k0T6SjrrElNXw2j2t-MNOQ';

        const map = new mapbox.Map({
        container: 'map',
        style: app.state.style,
        center: [
            app.state.longitude,
            app.state.latitude
        ],
        zoom: 12
        });

        const navigationControl = new mapbox.NavigationControl();

        map.addControl(navigationControl, 'top-right')

        this.props.app.setState({
            map: map
        })
    }

    render() {
        const app = this.props.app
        const map = app.state.map

        if(map) {
            map.setStyle(app.state.style)
        }

        return (
            <div id="map">
            </div>
        );
    }
}

export default Map;