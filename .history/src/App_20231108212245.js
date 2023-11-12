import './App.css';
import { MapViewer, RideDetails, Topbar } from './components';

function App() {
  return (
    <div className=' w-screen h-screen flex flex-col md:flex-row'>
      <Topbar />
      {/* Map view */}
      <MapViewer />
       {/* Left Side Details */}
      <RideDetails />
    </div>
  );
}

export default App;
