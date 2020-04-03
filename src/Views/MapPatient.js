import * as React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { db } from '../firebase';


// App ID and App Code from Here
const APP_ID_HERE = 'lnSIkpuj0z204RxRVyA8';
const APP_CODE_HERE = 'OZRJW15Yv9e8NV7RVl16mA';


export default class MapPatient extends React.Component {

    mapRef = React.createRef();
    state = {
        map: null,
        latitude: null,
        longitude: null,
        address: null,
        coordinates: null
    };

    handleChange = e => {
        this.setState({
            ...this.state,
            address: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { addressText } = this.state.address
        const finalAddress = { ...this.state.address }
        console.log(this.state.address)
        console.log(this.state.coordinates)
        // Saving address on Firebase

        db.collection("location").doc("user").set({
            address: this.state.address,
            coordinates: this.state.coordinates
        })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });


        // Checking address with HERE geocoder API
        let params = {
            'app_id': APP_ID_HERE,
            'app_code': APP_CODE_HERE,
        }
        params['searchtext'] = this.state.address

        const self = this;
        axios.get('https://geocoder.api.here.com/6.2/geocode.json',
            { 'params': params }
        ).then(function (response) {
            const view = response.data.Response.View
            const location = view[0].Result[0].Location;
            self.setState({
                ...self.state,
                coordinates: { lat: location.DisplayPosition.Latitude, lng: location.DisplayPosition.Longitude }
            })
        }).catch(function (error) {
            console.log('caught failed query');
            alert('ingrese dirección completa: calle, número y ciudad')
        });
    }

    componentDidMount() {

        // Display of map
        const platform = new window.H.service.Platform({
            apikey: "0X99ixE-W6vl9eBWT3gd13uiWOOgPW7X683wjR6U_Dk"
        });

        const defaultLayers = platform.createDefaultLayers();
        const map = new window.H.Map(
            this.mapRef.current,
            defaultLayers.vector.normal.map,
            {
                // map centered over Chile
                center: { lat: -33, lng: -70 },
                zoom: 4,
                pixelRatio: window.devicePixelRatio || 1
            });
        // const behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));
        // const ui = window.H.ui.UI.createDefault(map, defaultLayers);

        this.setState({ map });
        this.geolocating();
    }

    // Geolocation function
    geolocating() {
        const location = window.navigator && window.navigator.geolocation;
        if (location) {
            location.getCurrentPosition(
                position => {
                    this.state.map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude })
                    this.state.map.setZoom(14);
                    const patientMarker = new window.H.map.Marker({ lat: position.coords.latitude, lng: position.coords.longitude });
                    this.state.map.addObject(patientMarker);
                    this.setState({
                        coordinates: { lat: position.coords.latitude, lng: position.coords.longitude }
                    });
                },
                error => {
                    this.setState({
                        latitude: "err-latitude",
                        longitude: "err-longitude"
                    });
                }
            );
        }
    }

    componentWillUnmount() {
        this.state.map.dispose();
    }

    render() {
        return (
            <div className="row section container">
                <div ref={this.mapRef} style={{ height: "500px" }} />
                <div className="card light-green lighten-5">
                
                
                    <h5>
                        Ingresar dirección
                </h5>
                <form onSubmit={this.handleSubmit}
                    >
                        <label for="">Calle, número y ciudad</label>
                        <div className="input-field col s12">
                            <input
                                type="text"
                                id="direction"
                                name="addressText"
                                onChange={this.handleChange}
                            />
                            <label for="direction">Dirección:</label></div>
                            <div>
                            <button className="btn-large  black-text light-green lighten-3 waves-effect waves-light s12 m6 l6" type="submit" value="Buscar dirección">Buscar Dirección</button>
                            <Link to="/Notification">
                                <button className="btn-large  black-text light-green lighten-3 waves-effect waves-light s12 m6 l6" type="button" value="Confirmar solicitud" >Confirmar Solicitud</button>
                            </Link>
                            
                            </div>
                            
                    </form>
                    
                    </div>
                </div>
           
        );
    }
}





