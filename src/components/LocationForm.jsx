import React from 'react'

const LocationForm = ({handleSubmit}) => {



    return (
    <div className='flex items-center justify-center p-2 gap-3 h-16 min-w-[400px] w-screen mx-auto'>
        <form onSubmit={handleSubmit} className='flex gap-3'>
            <input className="text-black min-w-[250px] max-w-[700px]" 
            min={1} max={126} 
            placeholder="Type a location id..." 
            type="number" 
            id="SearchingLoc" required/>
            <button className='p-2 bg-black ring-2 ring-[#14f626] drop-shadow-[0_0_5px_#14f626]'>Search</button>
        </form>
    </div>
)
}

export default LocationForm