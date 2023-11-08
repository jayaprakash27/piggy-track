import './App.css';
import { MapViewer, RideDetails } from './components';

function App() {
  return (
    <div className=' w-screen h-screen flex flex-col-reverse md:flex-row'>
      
       {/* Left Side Details */}
      <div className=' bg-white h-1/3 md:h-screen w-full md:w-1/4'>
      <RideDetails />
      </div>
      <MapViewer />
    </div>
  );
}

export default App;
