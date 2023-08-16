import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ResidentCard = ({residentUrl}) => {
    const [residentInfo, setResidentInfo] = useState(null);

    //función para color del status
    const colorstatus= (status)=>{
        let color="";
        let shadowcolor="";
        if(status==="Alive"){
            color="bg-green-600";
            shadowcolor="hover:drop-shadow-[0_0_17px_#16a34a]"
        } else if(status==="Dead"){
            color="bg-red-600";
            shadowcolor="hover:drop-shadow-[0_0_17px_#dc2626]"
        } else{
            color="bg-orange-600"
            shadowcolor="hover:drop-shadow-[0_0_17px_#ea580c]"
        }
        return [color,shadowcolor];
    }
    

    useEffect(() => {
        axios
            .get(residentUrl)
            .then(({data})=>{setResidentInfo(data)})
            .catch((error)=>{console.log(error)});
    },[]);



return (

    <article className='flex flex-col gap-0 min-w-[200px] rounded-[100px] h-[410px] ring-2 ring-[#14f626] bg-black/50'>
        <div className='min-w-full flex flex-col p-2'> 
            <img className={`rounded-[100px] ${colorstatus(residentInfo?.status)[1]}`} src={ residentInfo?.image} alt="" />
            <div className='flex items-center gap-2 p-1 justify-center'>
                <div className={`h-[20px] aspect-square ${colorstatus(residentInfo?.status)[0]} rounded-full`}></div>
                <span className='text-[15px]'>{residentInfo?.status}</span>
            </div>
        </div>
        
        <div className='flex flex-col items-center justify-center text-center overflow-hidden p-1'>
            <h3 className='font-bold drop-shadow-[0_0_5px_#14f626] text-[18px]'>Name: <br /> {residentInfo?.name}</h3>
            <div className='grid gap-0.5 items-center text-[11px]'>
                <div className='flex flex-col'><span className='drop-shadow-[0_0_2px_#14f626]'> SPECIES: </span> <span>{residentInfo?.species}</span></div>
                <div className='flex flex-col'><span className='drop-shadow-[0_0_2px_#14f626]'> ORIGIN: </span> <span>{residentInfo?.origin.name}</span></div>
                <div className='flex'><span className='drop-shadow-[0_0_2px_#14f626]'> APPEARANCES: </span> <span>{residentInfo?.episode.length}</span></div>
            </div>

        </div>
    </article>
)
}

export default ResidentCard