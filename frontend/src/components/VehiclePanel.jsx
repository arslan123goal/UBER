import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 w-[90%] text-center absolute top-0'  onClick={() => {
          props.setVehiclePanel(false)
        }} ><i className="text-3xl text-gray-400 ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={() => {
          props.setConfirmRidePanel(true)
        }} className='flex border-2 active:border-black  mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span> </h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>Rs.930</h2>
        </div>
        <div onClick={() => {
          props.setConfirmRidePanel(true)
        }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span> </h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>Rs.360</h2>
        </div>
        <div onClick={() => {
          props.setConfirmRidePanel(true)
        }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span> </h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>Rs.280</h2>
        </div>
    </div>
  )
}

export default VehiclePanel