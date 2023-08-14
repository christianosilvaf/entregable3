import React from 'react'

const LocationForm = ({handleSubmit}) => {



    return (
    <div className='flex justify-between p-2 h-48 min-w-[400px]'>
        <form onSubmit={handleSubmit}>
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