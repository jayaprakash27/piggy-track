import './App.css';
import { MapViewer, RideDetails } from './components';

function App() {
  return (
    <div className=' w-screen h-screen flex'>
      // Left Side Details
      <RideDetails />
      <MapViewer />
    </div>
  );
}

export default App;
