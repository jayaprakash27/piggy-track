import './App.css';
import React, { useState } from 'react';
import { MapViewer, RideDetails, Topbar } from './components';

const ridersInfo = [
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
];

const driverInfo = {
  name: 'Pankaj Kumar',
  gender: 'Male',
  rating: 4.5,
  exp: 8,
  rides: 643,
  from: 'Sirsa',
  languages: 'Hindi, English',
  carNum: 'HR57A0461',
  carName: 'Maruthi - Ertiga 7 seater - Gurgoan'
}

function App() {
  const [riders, setRiders] = useState()
  return (
    <div className=' w-screen h-screen flex flex-col md:flex-row'>
      <Topbar />
      {/* Map view */}
      <MapViewer />
       {/* Left Side Details */}
      <RideDetails riders={riders} driverInfo={driverInfo} />
    </div>
  );
}

export default App;
