import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({residents,currentLocation}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const [residentShown, setResidentShown] = useState(5)

    const Residents_per_page=residentShown;

    const TotalPages= Math.ceil(residents.length / Residents_per_page);

    const sliceStart= (currentPage-1)*Residents_per_page;
    const sliceEnd= sliceStart+Residents_per_page;
    const Residents_in_page= residents.slice(sliceStart,sliceEnd);

    const Pages=[];
    for(let i=1;i<=TotalPages;i++){
        Pages.push(i);
    }

    const valueSlider=(e)=>{
        e.preventDefault();
        setResidentShown(e.target.value);
    }

    useEffect(()=>{
        setCurrentPage(1);
    },[currentLocation])

return (
    <section className='flex flex-col gap-2'>
        <div className='flex flex-col items-center justify-between gap-1'>
            <h2 className='font-bold text-center text-[50px] p-2 my-4'>Residents List:</h2>
            <form onChange={valueSlider} >
                <label for="Nuresidents">Choose Number of Residents Shown: </label>
                <div className='flex items-center justify-center my-3'>
                <input
                    type="range"
                    name="NumberRes"
                    id="NumberRes"
                    min="1"
                    max="20"
                    step="1"
                    value="10" />
                <output class="NuRe-output" for="Nuresidents">{residentShown}</output>
                </div>
            </form>
        </div>
        
        <section className='grid auto-rows-max auto-cols-max items-center justify-center gap-5'>
            {
                Residents_in_page.map((resident)=> 
                <ResidentCard key={resident} residentUrl={resident}/>)
            }
        </section>

        <section >
            <ul className='flex items-center justify-between gap-2'>
                {
                    Pages.map((page)=>
                    <li className={`${currentPage===page && "text-red-500"} bg-green-400 w-[50px] h-[50px] text-center p-2 rounded-md text-[25px] my-2 font-medium`}
                        onClick={()=>setCurrentPage(page)} 
                        key={page}> 
                        {page} 
                    </li>
                )
                }
            </ul>
        </section>
    </section>
)
}

export default ResidentList