import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({residents,currentLocation,residentShown}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const Residents_per_page=residentShown;

    const TotalPages= Math.ceil(residents.length / Residents_per_page);

    const sliceStart= (currentPage-1)*Residents_per_page;
    const sliceEnd= sliceStart+Residents_per_page;
    const Residents_in_page= residents.slice(sliceStart,sliceEnd);

    const Pages=[];
    for(let i=1;i<=TotalPages;i++){
        Pages.push(i);
    }

    

    useEffect(()=>{
        setCurrentPage(1);
    },[currentLocation])

return (
    <section className='flex flex-col items-center gap-2 max-w-[1200px] w-screen '>
        
        
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
                    <li className={`${currentPage===page && "text-white drop-shadow-[0_0_5px_#14f626] bg-black"} bg-green-400 w-[35px] h-[35px] text-center p-2 rounded-md text-[18px] my-1 font-medium cursor-pointer`}
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