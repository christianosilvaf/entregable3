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

    <article>
        <div> 
            <img src={ residentInfo?.image} alt="" />
            <div className='flex items-center gap-2 p-2'>
                <div className={`h-[18px] aspect-square ${colorstatus(residentInfo?.status)} rounded-full`}></div>
                <span>{residentInfo?.status}</span>
            </div>
        </div>
        
        <div>
            <h3>Name: {residentInfo?.name}</h3>
            <div>
                <span> Species: {residentInfo?.species}</span>
                <span> Origin: {residentInfo?.origin.name}</span>
                <span> Appearances: {residentInfo?.episode.length}</span>
            </div>

        </div>
    </article>
)
}

export default ResidentCard