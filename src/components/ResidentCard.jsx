import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ResidentCard = ({residentUrl}) => {
    const [residentInfo, setResidentInfo] = useState(null);

    //función para color del status
    const colorstatus= (status)=>{
        let color="";
        if(status==="Alive"){
            color="bg-green-500";
        } else if(status==="Dead"){
            color="bg-red-500";
        } else{
            color="bg-orange-500"
        }
        return color;
    }
    

    useEffect(() => {
        axios
            .get(residentUrl)
            .then(({data})=>{setResidentInfo(data)})
            .catch((error)=>{console.log(error)});
    },[]);



return (

    <article className='min-w-[300px] rounded-[100px] bg-red-500'>
        <div className='min-w-full flex flex-col p-2'> 
            <img className='rounded-[100px]' src={ residentInfo?.image} alt="" />
            <div className='flex items-center gap-2 p-2 justify-center'>
                <div className={`h-[18px] aspect-square ${colorstatus(residentInfo?.status)} rounded-full`}></div>
                <span>{residentInfo?.status}</span>
            </div>
        </div>
        
        <div className='flex flex-col items-center justify-center text-center bg-slate-600 rounded-b-[100px]'>
            <h3 className='font-bold'>Name: {residentInfo?.name}</h3>
            <div className='grid gap-0.5 items-center'>
                <span> Species: {residentInfo?.species}</span>
                <span> Origin: {residentInfo?.origin.name}</span>
                <span> Appearances: {residentInfo?.episode.length}</span>
            </div>

        </div>
    </article>
)
}

export default ResidentCard