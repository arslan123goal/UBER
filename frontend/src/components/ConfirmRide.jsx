import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 className='p-1 w-[90%] text-center absolute top-0' onClick={() => {
        props.setConfirmRidePanel(false)
      }} ><i className="text-3xl text-gray-400 ri-arrow-down-wide-fill"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

      <div className='flex gap-5 flex-col justify-between items-center'>
        <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Jhok Sial</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Jhok Sial</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 '>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>Rs.490</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
        <button onClick={() => {
          props.setVehicleFound(true)
          props.setConfirmRidePanel(false)
        }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
      </div>
    </div>
  )
}

export default ConfirmRide