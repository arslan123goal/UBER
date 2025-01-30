import React from 'react'

const LocationSearchPanel = (props) => {
    // console.log(props)
    const locations = [
        "24B, Near cool point, cph coding school, Faisalabad, Pakistan",
        "22C, Near jhol point, cph coding school, Faisalabad, Pakistan",
        "20B, Near phool point, cph coding school, Faisalabad, Pakistan",
        "18A, Near tool point, cph coding school, Faisalabad, Pakistan",
    ]

    return (
        <div>

            {
                locations.map(function (elem, idx) {
                    return <div key={idx} onClick={() => {
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className='flex gap-4 rounded-xl border-2 border-gray-100 active:border-black p-2 items-center justify-start my-2'>
                        <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                })
            }

        </div>
    )
}

export default LocationSearchPanel