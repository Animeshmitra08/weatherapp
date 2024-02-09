import React from 'react'

const Temperature = ({weatherData}) => {
  var weatherIcon = weatherData.weather[0].icon;
  return (
    <>
        <div className="w-full bg-slate-300 h-60 rounded-xl p-4 shadow-xl flex gap-2 col-span-5 justify-evenly items-end">
            <div className="flex flex-col gap-3">
              <div className="flex">              
                <div className="text-9xl">
                  {weatherData.main.temp}
                </div>              
                <span>o</span>
                <span className="text-4xl">C</span>
              </div>
              <div className="text-4xl">
                <p>{weatherData.name}</p>
              </div>
            </div>

            <div className="text-lg flex flex-col gap-2">
              <p>Feels Like : {weatherData.main.feels_like}&deg;C</p>
              <p>Humidity : {weatherData.main.humidity}%</p>
              <p>Pressure : {weatherData.main.pressure}hPa</p>
            </div>
                      
            <div className="text-lg">
              <p>Latitude : {weatherData.coord.lat}</p>
              <p>Longitude : {weatherData.coord.lon}</p>
            </div>
            <div className="text-lg">
              <p>Sunrise : {weatherData.sys.sunrise}</p>
              <p>Sunrise : {weatherData.sys.sunset}</p>
            </div>
            <div className="flex flex-col items-center text-2xl">
              <img className="w-32" src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="weather_icon"/>
              <p>{weatherData.weather[0].description}</p>
            </div>
        </div>
    </>
  )
}

export default Temperature