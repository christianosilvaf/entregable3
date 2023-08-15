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
    <section className='flex flex-col items-center gap-2 max-w-[1200px] w-screen'>
        <div className='flex flex-col items-center justify-between gap-1 sticky top-[148px]'>
            <h2 className='font-bold text-center text-[30px] p-2'>Residents List:</h2>
            <form onChange={valueSlider} >
                <label htmlFor="Nuresidents">Choose Number of Residents Shown: </label>
                <div className='flex items-center justify-center'>
                <input
                    type="range"
                    name="NumberRes"
                    id="NumberRes"
                    min="1"
                    max="20"
                    step="1"
                    defaultValue="10" />
                <output className="NuRe-output" htmlFor="Nuresidents">{residentShown}</output>
                </div>
            </form>
        </div>
        
        <section className='grid grid-cols-[repeat(auto-fit,_200px)] items-center justify-center gap-6 max-w-[1250px] w-screen mx-auto my-5'>
            {
                Residents_in_page.map((resident)=> 
                <ResidentCard key={resident} residentUrl={resident}/>)
            }
        </section>

        <section className=' max-w-[720px] w-screen mx-auto'>
            <ul className='grid grid-cols-[repeat(auto-fit,_50px)]  items-center justify-center  gap-2 '>
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