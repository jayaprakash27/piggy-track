import './App.css';
import { MapViewer, RideDetails } from './components';

function App() {
  return (
    <div className=' w-screen h-screen flex flex-col-reverse md:flex-row'>
      
       {/* Left Side Details */}
      <RideDetails />
      <MapViewer />
    </div>
  );
}

export default App;
