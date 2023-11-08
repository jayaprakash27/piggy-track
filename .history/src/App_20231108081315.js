import './App.css';
import { MapViewer, RideDetails } from './components';

function App() {
  return (
    <div className=' w-screen relative h-screen flex flex-col md:flex-row'>
       {/* Left Side Details */}
      <RideDetails />


      {/* Map view */}
      <MapViewer />
    </div>
  );
}

export default App;
