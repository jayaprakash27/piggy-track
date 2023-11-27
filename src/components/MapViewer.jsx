import React, { useState, useEffect, useRef } from "react";
// import {
//   useJsApiLoader,
//   GoogleMap,
//   Marker,
//   Autocomplete,
//   DirectionsRenderer,
//   LoadScript,
// } from "@react-google-maps/api";

import { Wrapper } from "@googlemaps/react-wrapper";
import ThreejsOverlayView from "@ubilabs/threejs-overlay-view";
import {
  CatmullRomCurve3,
  Vector3,
  MeshBasicMaterial,
  Mesh,
  SphereGeometry,
} from "three";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

// import carTop from "../assets/images/icons8-car-top-view-32.png";

const MapViewer = () => {
  // async function calculateRoute() {
  //   // if (originRef.current.value === "" || destiantionRef.current.value === "") {
  //   //   return;
  //   // }
  //   if (destP === "") {
  //     return;
  //   }
  //   // eslint-disable-next-line no-undef
  //   const directionsService = new google.maps.DirectionsService;
  //   const results = await directionsService.route({
  //     // origin: originRef.current.value,
  //     // destination: destiantionRef.current.value,
  //     origin: latlng,
  //     destination: destP,
  //     // eslint-disable-next-line no-undef
  //     travelMode: google.maps.TravelMode.DRIVING,
  //   });
  //   console.log(results);
  //   setDirectionsResponse(results);
  //   // setDistance(results.routes[0].legs[0].distance.text);
  //   // setDuration(results.routes[0].legs[0].duration.text);
  // }
  return (
    <div className=" h-3/4 fixed top-0 md:h-screen z-10 w-full md:left-1/4 md:w-3/4">
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <MapContainer />
      </Wrapper>
    </div>
  );
};

function MapContainer() {
  const [mapOptions, setMapOptions] = useState({
    center: { lat: 21.498907884782355, lng: 83.90060300554642 },
    zoom: 18,
    disableDefaultUI: true,
    mapId: process.env.REACT_APP_MAP_ID,
    tilt: 45,
  });
  const [map, setMap] = useState();
  const mapRef = useRef();

  const [origin, setOrigin] = useState({
    lat: 21.498907884782355,
    lng: 83.90060300554642,
  });
  const [wayPts, setWayPts] = useState([
    {
      lat: 21.506140,
      lng: 83.938520,
    },
    {
      lat: 21.4880172,
      lng: 83.9179003,
    },
    {
      lat: 21.4931531,
      lng: 83.9318293,
    },
  ])
  const [destination, setDestination] = useState("GW2X+CV Sambalpur, Odisha");

  const [route, setRoute] = useState();
  useEffect(() => {
    setMap(new window.google.maps.Map(mapRef.current, mapOptions));
  }, []);

  
  useEffect(() => {
    if (map && route) {
      // Fit the map bounds to include both origin and destination
      const bounds = new window.google.maps.LatLngBounds();
      route.forEach((point) => bounds.extend(point));
      map.fitBounds(bounds);
    }
  }, [map, route]);

  return (
    <>
      <div ref={mapRef} id="map" className=" w-full h-full">
      {map && (
        <Direction
          origin={origin}
          destination={destination}
          setRoute={setRoute}
          wayPts={wayPts}
        />
      )}
      {map && route && (
        <>
        <Animation
          origin={origin}
          destination={destination}
          map={map}
          route={route}
        />
        </>
      )}
        <button className=" absolute z-30">Go 3D</button>
        </div>
    </>
  );
}

const ANIMATION_MS = 60000;
const FRONT_VECTOR = new Vector3(0, -1, 0);

function Animation({ map, route, origin, destination }) {
  const overlayRef = useRef();
  const trackRef = useRef();
  const carRef = useRef();
  const originMarkerRef = useRef();
  const destinationMarkerRef = useRef();

  useEffect(() => {
    if (!overlayRef.current) {
      overlayRef.current = new ThreejsOverlayView({
        lat: map.center.lat(),
        lng: map.center.lng(),
      });
      overlayRef.current.setMap(map);
    }
    const scene = overlayRef.current.getScene();
    const points = route.map((p) => overlayRef.current.latLngAltToVector3(p));
    const curve = new CatmullRomCurve3(points);

    // Direction TRACK
    if (trackRef.current) {
      scene.remove(trackRef.current);
    }
    trackRef.current = createTrackFromCurve(curve);
    scene.add(trackRef.current);

    // VEHICLE
    loadModel().then((carModel) => {
      if (carRef.current) {
        scene.remove(carRef.current);
      }
      carRef.current = carModel;
      scene.add(carRef.current);
    });
    
    // ORIGIN MARKER
    createMarker(curve.points[0], "Origin").then((marker) => {
      if (originMarkerRef.current) {
        scene.remove(originMarkerRef.current);
      }
      originMarkerRef.current = marker;
      scene.add(originMarkerRef.current);
    });
    
    // DESTINATION MARKER
    createMarker(curve.points[curve.points.length - 1], "Destination").then((marker) => {
      if (destinationMarkerRef.current) {
        scene.remove(destinationMarkerRef.current);
      }
      destinationMarkerRef.current = marker;
      scene.add(destinationMarkerRef.current);
    });

    overlayRef.current.update = () => {
      // console.log('OK');
      trackRef.current.material.resolution.copy(
        overlayRef.current.getViewportSize()
      );
      if (carRef.current) {
        const progress = (performance.now() % ANIMATION_MS) / ANIMATION_MS;
        curve.getPointAt(progress, carRef.current.position);
        carRef.current.quaternion.setFromUnitVectors(
          FRONT_VECTOR,
          curve.getTangentAt(progress)
        );
        // console.log(curve);
        carRef.current.rotateX(Math.PI / 2);
      }

      // Update map center based on the car's position
      // const carPositionLatLng = overlayRef.current.vector3ToLatLngAlt(
      //   carRef.current.position
      // );
      // map.setCenter({
      //   lat: carPositionLatLng.lat,
      //   lng: carPositionLatLng.lng,
      // });
      overlayRef.current.requestRedraw();
    };
    return () => {
      scene.remove(trackRef.current);
      scene.remove(carRef.current);
      scene.remove(originMarkerRef.current);
      scene.remove(destinationMarkerRef.current);
    };
  }, [route]);

  return null;
}

// function Animation({ map, route, origin, destination }) {
//   const overlayRef = useRef();
//   const carRef = useRef();
//   const originMarkerRef = useRef();
//   const destinationMarkerRef = useRef();

//   useEffect(() => {
//     map.setZoom(15);

//     if (!overlayRef.current) {
//       overlayRef.current = new ThreejsOverlayView({
//         lat: map.center.lat(),
//         lng: map.center.lng(),
//       });
//       overlayRef.current.setMap(map);
//     }

//     // VEHICLE
//     loadModel().then((carModel) => {
//       if (carRef.current) {
//         overlayRef.current.getScene().remove(carRef.current);
//       }
//       carRef.current = carModel;
//       overlayRef.current.getScene().add(carRef.current);
//     });



//     overlayRef.current.update = () => {
//       if (carRef.current) {
//         const progress = (performance.now() % ANIMATION_MS) / ANIMATION_MS;

//         // Get the position on the route based on progress
//         const position = interpolateRoute(route, progress);

//         // Update car position
//         carRef.current.position.copy(position);

//         // Update camera position relative to the car
//         const cameraOffset = new Vector3(0, -100, 50); // Adjust as needed
//         const cameraPosition = position.clone().add(cameraOffset);
//         overlayRef.current.camera.position.copy(cameraPosition);

//         // Look at the car
//         overlayRef.current.camera.lookAt(position);
//       }

//       overlayRef.current.requestRedraw();
//     };

//     // Ensure that the path is updated continuously
//     const animate = () => {
//       overlayRef.current.update();
//       requestAnimationFrame(animate);
//     };
//     animate();

//     return () => {
//       overlayRef.current.getScene().remove(carRef.current);
//       overlayRef.current.getScene().remove(originMarkerRef.current);
//       overlayRef.current.getScene().remove(destinationMarkerRef.current);
//     };
//   }, [route, origin, destination]);

//   return null;
// }


// Helper function to create a marker with label

async function createMarker(position, label) {
  // Create a sphere as a simple marker
  const geometry = new SphereGeometry( 50, 100, 100 );
  const material = new MeshBasicMaterial({ color: 0x0000ff });
  const marker = new Mesh(geometry, material);
  if(label === "Origin"){
    marker.material.setValues({ color: 0x00ff00 })
  }
  if(label === "Destination"){
    marker.material.setValues({ color: 0xff0000 })
  }
  // Add label to the marker
  const loader = new FontLoader();
  const font = await loader.loadAsync(
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
  );
  const textGeometry = new TextGeometry(label, {
    font: font,
    size: 50,
    height: 2,
  });

  const textMaterial = new MeshBasicMaterial({ color: 0x000000 });
  const labelText = new Mesh(textGeometry, textMaterial);
  
  if(label === "Origin"){
    labelText.position.set(position.x, position.y, position.z + 50);
  }

  const markerGroup = new Mesh();
  markerGroup.add(marker, labelText);
  markerGroup.position.set(position.x, position.y + 25, position.z + 50);
  // markerGroup.rotateZ(90);
  markerGroup.rotateX(45);

  return markerGroup;
}

async function loadModel() {
  const loader = new GLTFLoader();
  const object = await loader.loadAsync("/models/carmodel.gltf");
  const scene = object.scene;
  scene.scale.setScalar(30);
  return scene;
}

function createTrackFromCurve(curve) {
  const points = curve.getSpacedPoints(curve.points.length * 20);
  const positions = points.map((p) => p.toArray()).flat();
  return new Line2(
    new LineGeometry().setPositions(positions),
    new LineMaterial({
      color: 0x5245c2,
      linewidth: 8,
    })
  );
}

function Direction({ setRoute, origin, destination, wayPts }) {
  useEffect(() => {
    fetchDirection(origin, destination, wayPts, setRoute);
  }, [origin, destination]);

  return null;
}

async function fetchDirection(origin, destination, wayPts, setRoute) {
  const service = new window.google.maps.DirectionsService();
  var waypoints = [];
  wayPts.map(pt => {
    waypoints.push({
      location: pt,
      stopover: true,
    })
  })
  service.route(
    {
      origin: origin,
      destination: destination,
      waypoints: waypoints,
      optimizeWaypoints: true,
      travelMode: window.google.maps.TravelMode.DRIVING,
    },
    (result, status) => {
      if (status === "OK" && result) {
        const route = result.routes[0].overview_path.map((path) => ({
          lat: path.lat(),
          lng: path.lng(),
        }));
        setRoute(route);
      }
    }
  );
}
export default MapViewer;
