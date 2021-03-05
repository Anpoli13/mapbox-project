import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isLoading: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        const accessToken = "pk.eyJ1IjoiYW5wb2xpIiwiYSI6ImNrbHRpdGN3djI2bm8ybm4xaXN6czgwaTEifQ.k0T6SjrrElNXw2j2t-MNOQ";
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const places = this.props.app.state.places;
                const firstResult = data.features[0]

                places.push({
                    name: this.state.value, 
                    latitude: firstResult.center[1], 
                    longitude: firstResult.center[0]
                })

                this.props.app.setState({
                    places: places
                })

                this.setState({
                    value: ''
                })

                this.props.app.state.map.flyTo({
                    center: [firstResult.center[0], firstResult.center[1]], 
                    zoom: 10
                });

            })

        
            

        
    }
 
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.value} onChange={this.handleChange} placeholder="Search..."/>
            </form>
        )
    }
}

export default Search;