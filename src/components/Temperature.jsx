import React from 'react'

const Temperature = ({weatherData}) => {
  var weatherIcon = weatherData.weather[0].icon;
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let dateTime = new Date();
  let day = weekday[dateTime.getDay()];
  let time = dateTime.toLocaleTimeString('en-US');


  let sunrise = weatherData.sys.sunrise;
  let rise_militime = new Date(sunrise*1000);
  let rise_time = rise_militime.toLocaleTimeString();
  let sunset = weatherData.sys.sunset;
  let set_militime = new Date(sunset*1000);
  let set_time = set_militime.toLocaleTimeString();
  return (
    <>
        <div className="w-full bg-slate-300 sm:h-60 rounded-xl p-4 shadow-xl flex gap-2 col-span-5 justify-evenly items-center sm:items-end flex-col sm:flex-row">
            <div className="flex flex-col justify-center md:gap-0 gap-3">
              <p className="font-semibold md:text-xl">Temperature:</p>
              <div className="flex">       
                <div className="md:text-9xl text-8xl">
                  {weatherData.main.temp.toFixed()}
                </div>              
                <span>o</span>
                <span className="md:text-4xl text-2xl">C</span>
              </div>
              <div className="md:text-4xl text-2xl font-semibold">
                <p>{weatherData.name}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 lg:text-xl">              
              <p>Feels Like : {weatherData.main.feels_like.toFixed()}&deg;C</p>
              <p>Humidity : {weatherData.main.humidity}%</p>
              <p>Pressure : {weatherData.main.pressure}hPa</p>
            </div>
                      
            <div className="lg:text-xl">
              <p>Latitude : {weatherData.coord.lat}</p>
              <p>Longitude : {weatherData.coord.lon}</p>
            </div>
            <div className="lg:text-xl">
              <p>Sunrise : {rise_time}</p>
              <p>Sunrise : {set_time}</p>
            </div>
            <div className="flex flex-col items-center lg:text-2xl">
              <p className="font-medium">{day}</p> 
              <p className="font-medium">{time}</p>
              <img className="w-28" src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="weather_icon"/>
              <p>{weatherData.weather[0].description}</p>
            </div>
        </div>
    </>
  )
}

export default Temperature