import React from 'react'

const LocationInfor = ({currentLocation}) => {


    return (
    <section className='bg-gray-400 flex flex-col items-center p-2 gap-2 min-w-[300px]  my-2 sticky top-8'>
        <h2 className='font-bold'>Name Location: {currentLocation?.name}</h2>
        <div className='grid gap-2 '>
            <span className='bg-gray-500 rounded-lg col-span-1 p-1.5 text-center'> Type: {currentLocation?.type}</span>
            <span className='bg-gray-500 rounded-lg col-span-1 p-1.5 text-center'> Population: {currentLocation?.residents.length}</span>
            <span className='bg-gray-500 rounded-lg col-span-2 p-1.5 text-center'> Dimension: {currentLocation?.dimension}</span>
        </div>
    </section>
)
}

export default LocationInfor