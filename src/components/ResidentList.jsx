import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({residents, currentLocation, resident_Shown}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const TotalPages= Math.ceil(residents.length / resident_Shown);

    const sliceStart= (currentPage-1)*resident_Shown;
    const sliceEnd= sliceStart+resident_Shown;
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
        
        
        <section>
            {
                Residents_in_page==0 ?
                <div className='bg-[url(/empty3.png)] bg-cover bg-center h-[600px] '>
                    <span className='text-[50px]'> Ups! Aqui no hay nada...</span>
                </div>
                :
                <section className='grid grid-cols-[repeat(auto-fit,_200px)]  max-[400px]:flex max-[400px]:flex-col max-[400px]:m-auto  items-center justify-center gap-6 max-w-[1250px] w-screen mx-auto my-5'>
                {Residents_in_page.map((resident)=>(
                <ResidentCard key={resident} residentUrl={resident}/>))}
                </section>
            }
        </section>

        <section className=' max-w-[720px] w-screen mx-auto'>
            <ul className='grid grid-cols-[repeat(auto-fit,_50px)]    items-center justify-center  gap-2 '>
                {
                    Pages.map((page)=>
                    <li className={`${currentPage==page && "text-white drop-shadow-[0_0_5px_#eec400]"} bg-green-400 w-[35px] h-[35px] text-center p-2 rounded-md text-[18px] my-1 font-medium cursor-pointer`}
                        onClick={()=> {setCurrentPage(page), console.log(resident_Shown, sliceStart, sliceEnd)}} 
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