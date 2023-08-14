import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({residents,currentLocation}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const Residents_per_page=10;

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
    <section>
        <section>
            {
                Residents_in_page.map((resident)=> 
                <ResidentCard key={resident} residentUrl={resident}/>)
            }
        </section>

        <section >
            <ul className='flex gap-2'>
                {
                    Pages.map((page)=>
                    <li className={`${currentPage===page && "text-red-500"}`}
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