import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/randomGen';
import LocationForm from './components/LocationForm.jsx';
import LocationInfor from './components/LocationInfor.jsx';
import ResidentList from './components/ResidentList.jsx';
import getLocation from './utils/getLocation';

function App() {

  const [currentLocation, setCurrentLocation] = useState(null);

  const [residentShown, setResidentShown] = useState(10)
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const SearchLoc= e.target.SearchingLoc.value;
    getLocation(SearchLoc,setCurrentLocation);
    
  };

  const handleResidentShown=(e)=>{
    setResidentShown(e);
  }



  useEffect(()=>{
    const RandomLocation=getRandomNumber(126);
    getLocation(RandomLocation,setCurrentLocation);

  },[])

  return (
    <main className='bg-[url(./bgpage.png)] bg-cover text-white flex flex-col items-center justify-center gap-2 w-screen'>
      <div className='bg-[url(./bgheader.png)] bg-cover bg-center sticky top-0 '>
        <LocationForm handleSubmit={handleSubmit}/>
        <LocationInfor currentLocation={currentLocation} residentShown={handleResidentShown}/>
      </div>
      
      <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation} residentShown={residentShown}/>
    </main>
  )
}

export default App
