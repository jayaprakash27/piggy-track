import './App.css';
import React, { useState } from 'react';
import { MapViewer, RideDetails, Topbar } from './components';

function App() {
  const [riders, setRiders] = useState([
    {
    name: 'Reyaansh',
    gender: 'Male',
    fromName: 'School',
    fromAdd: 'The Sixth Element School - Southern PeripheralRd, behind Tata Primanti Club, Dhani, Sector 72, Gurugram, Haryana 122001',
    toName: 'Home',
    toAdd: 'B-5/304 Tulip Violet Ggn',
  },
  {
  name: 'Reyaansh',
  gender: 'Male',
  fromName: 'School',
  fromAdd: 'The Sixth Element School - Southern PeripheralRd, behind Tata Primanti Club, Dhani, Sector 72, Gurugram, Haryana 122001',
  toName: 'Home',
  toAdd: 'B-5/304 Tulip Violet Ggn',
},
  {
  name: 'Reyaansh',
  gender: 'Male',
  fromName: 'School',
  fromAdd: 'The Sixth Element School - Southern PeripheralRd, behind Tata Primanti Club, Dhani, Sector 72, Gurugram, Haryana 122001',
  toName: 'Home',
  toAdd: 'B-5/304 Tulip Violet Ggn',
},
])
  return (
    <div className=' w-screen h-screen flex flex-col md:flex-row'>
      <Topbar />
      {/* Map view */}
      <MapViewer />
       {/* Left Side Details */}
      <RideDetails riders={riders} />
    </div>
  );
}

export default App;
