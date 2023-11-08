import './App.css';
import { MapViewer, RideDetails } from './components';

function App() {
  return (
    <div className=' w-screen h-screen flex flex-col-reverse md:flex-row'>
      // Left Side Details
      <div className=' bg-white h-screen w-full md:w-1/4'>
      <RideDetails />
      </div>
      <div className=' bg-white h-screen w-full md:w-3/4'>
      <MapViewer />
      </div>
    </div>
  );
}

export default App;
