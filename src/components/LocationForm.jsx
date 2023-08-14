import React from 'react'

const LocationForm = ({handleSubmit}) => {



    return (
    <form onSubmit={handleSubmit}>
        <input className="text-black" 
        min={1} max={126} 
        placeholder="Typea location id..." 
        type="number" 
        id="SearchingLoc"/>
        <button>Search</button>
    </form>
)
}

export default LocationForm