import React from 'react'

const LocationInfor = ({currentLocation,residentShown,Nureshown}) => {


    const valueSlider=(e)=>{
        e.preventDefault();
        residentShown(e.target.value);
    }


    return (
    <section className='flex flex-col items-center p-2 gap-2 min-w-[350px] max-w-[600px]  
        my-2 mx-auto '>
        <div>
            <h2 className='font-bold drop-shadow-[0_0_5px_#14f626] text-[25px]'>Name Location: {currentLocation?.name}</h2>
            <div className='grid gap-2 drop-shadow-[0_0_3px_#14f626] '>
                <span className='bg-black/90 rounded-lg col-span-1 p-1.5 text-center backdrop-blur-xl flex items-center'> Type: {currentLocation?.type}</span>
                <span className='bg-black/90 rounded-lg col-span-1 p-1.5 text-center backdrop-blur-xl flex items-center'> Population: {currentLocation?.residents.length}</span>
                <span className='bg-black/90 rounded-lg col-span-2 p-1.5 text-center backdrop-blur-xl '> Dimension: {currentLocation?.dimension}</span>
            </div>
        </div>

        <div className='flex flex-col items-center justify-between gap-1'>
            <h2 className='font-bold text-center text-[30px] p-2 drop-shadow-[0_0_5px_#14f626]'>Residents List:</h2>
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
                <output className="NuRe-output" htmlFor="Nuresidents">{Nureshown}</output>
                </div>
            </form>
        </div>

    </section>
)
}

export default LocationInfor