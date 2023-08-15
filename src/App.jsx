import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/randomGen';
import LocationForm from './components/LocationForm.jsx';
import LocationInfor from './components/LocationInfor.jsx';
import ResidentList from './components/ResidentList.jsx';
import getLocation from './utils/getLocation';

function App() {

  const [currentLocation, setCurrentLocation] = useState(null);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const SearchLoc= e.target.SearchingLoc.value;
    getLocation(SearchLoc,setCurrentLocation);
    
  };

  useEffect(()=>{
    const RandomLocation=getRandomNumber(126);
    getLocation(RandomLocation,setCurrentLocation);

  },[])

  return (
    <main className='bg-black text-white flex flex-col items-center justify-center gap-2'>
      <LocationForm handleSubmit={handleSubmit}/>
      <LocationInfor currentLocation={currentLocation}/>
      <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation}/>
    </main>
  )
}

export default App
