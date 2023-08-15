import React from 'react'

const LocationForm = ({handleSubmit}) => {



    return (
    <div className='flex justify-center p-2 h-16 min-w-[400px] w-screen'>
        <form onSubmit={handleSubmit} className='w-100%'>
            <input className="text-black min-w-{2/3}" 
            min={1} max={126} 
            placeholder="Typea location id..." 
            type="number" 
            id="SearchingLoc"/>
            <button>Search</button>
        </form>
    </div>
)
}

export default LocationForm