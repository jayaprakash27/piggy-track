import React, { useState, useEffect } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const MapViewer = () => {
  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  
  const [map, setMap] = useState(/* / @type google.maps.Map */ null);
  const [latlng, setLatlng] = useState();

  
  function getCenter() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatlng({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }
  
  useEffect(() => {
    getCenter();
  }, []);


  return (
    <div>
      { isLoaded && 
          <GoogleMap
            center={latlng}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            {map && ( role == 'parent' ? <Marker icon={ {url: 'https://img.icons8.com/ios-filled/50/car.png'} } position={{lat: rideInfo.driverLoc.lat, lng: rideInfo.driverLoc.lng}}/> : <Marker position={latlng} /> ) }
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap> }
    </div>
  )
}

export default MapViewer