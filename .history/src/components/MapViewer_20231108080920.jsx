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
    <div
    className=' h-3/4 md:h-screen relative z-10 w-full'>
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
            {map && <Marker position={latlng} /> }
            {/* {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )} */}
          </GoogleMap> }
    </div>
  )
}

export default MapViewer