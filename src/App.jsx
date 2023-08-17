import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/randomGen';
import LocationForm from './components/LocationForm.jsx';
import LocationInfor from './components/LocationInfor.jsx';
import ResidentList from './components/ResidentList.jsx';
import getLocation from './utils/getLocation';

function App() {

  const [currentLocation, setCurrentLocation] = useState(null);

  const [residentShown, setResidentShown] = useState(10);

  const [scrollTop, setScrollTop] = useState(0);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const SearchLoc= e.target.SearchingLoc.value;
    getLocation(SearchLoc,setCurrentLocation);
    
  };

  const handleResidentShown=(e)=>{
    setResidentShown(e);
    console.log(residentShown,e)
  }

  const handleScroll = event => {
    setScrollTop(event.target.scrollTop);
    console.log("scrolling")
  };



  useEffect(()=>{
    const RandomLocation=getRandomNumber(126);
    getLocation(RandomLocation,setCurrentLocation);

  },[])

  return (
    <main className='bg-[url(/bgpage.png)] bg-cover  text-white flex flex-col items-center justify-center gap-2 w-screen' 
      onScroll={handleScroll}>
      <div className='w-1/1 -top-200'>
        <img src="/headerimg.png" alt="" className=''/>
      </div>
      <div className='sticky top-0  bg-gradient-radial from-[#14f626] to-Transparent max-[400px]:max-w-[350px]' >
        <LocationForm handleSubmit={handleSubmit}/>
        <LocationInfor currentLocation={currentLocation} residentShown={handleResidentShown}/>
      </div>
      
      <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation} resident_Shown={residentShown}/>
    </main>
  )
}

export default App
