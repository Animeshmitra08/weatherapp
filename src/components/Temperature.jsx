import React from 'react'

const Temperature = ({weatherData}) => {
  return (
    <>
        <div className="w-full bg-slate-300 h-60 rounded-xl p-4 shadow-xl flex flex-col col-span-5">
            <div className="flex">
              <div>
                <p>{weatherData.name}</p>
              </div>
              <div className="text-9xl">
                {weatherData.main.temp}
              </div>
              <span>o</span>
              <span className="text-4xl">C</span>
            </div>
            <div>
              {/* <p>{props.latitude}</p>
              <p>{props.longitude}</p> */}
            </div>
        </div>
    </>
  )
}

export default Temperature