import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {

    const mapStyle = {
        height: '50vh',
        widht: '100%',
    }

    const defaultCenter = {
        lat: 19.4267261, lng: -99.1718796
    }

    return(
        <LoadScript googleMapsApiKey='AIzaSyDQaSNKi3tqY-CcwzPwktR0fxnu3r8CZWs' >
            <GoogleMap
            mapContainerStyle={mapStyle}
            zoom={8}
            center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;