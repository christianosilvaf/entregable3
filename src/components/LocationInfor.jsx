import React from 'react'

const LocationInfor = ({currentLocation}) => {


    return (
    <section>
        <h2>Name Location: {currentLocation?.name}</h2>
        <div>
            <span> Type: {currentLocation?.type}</span>
            <span> Dimension: {currentLocation?.dimension}</span>
            <span> Population: {currentLocation?.residents.length}</span>
        </div>
    </section>
)
}

export default LocationInfor