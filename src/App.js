import './App.css';
import { MapViewer, RideDetails } from './components';

function App() {
  return (
    <div className=' w-screen h-screen flex flex-col md:flex-row'>
      {/* Map view */}
      <MapViewer />
       {/* Left Side Details */}
      <RideDetails />
    </div>
  );
}

export default App;
