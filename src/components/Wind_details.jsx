import React from 'react'

const Wind_details = ({windData}) => {
  return (
    <>
        <div className="bg-slate-200 sm:w-60 h-60 rounded-xl p-4 shadow-lg">
            <p className="text-2xl border-b-2 border-blue-300 mb-2">Wind Forecast</p>
            <div className='flex flex-col gap-1 text-base'>
              <p>Speed : {windData.wind.speed} meter/sec</p>
              <p>Gust : {windData.wind.gust} meter/sec</p>
              <p>Degree : {windData.wind.deg}&deg;</p>
            </div>
            
        </div>
    </>
  )
}

export default Wind_details