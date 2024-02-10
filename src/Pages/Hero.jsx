import React, { useEffect, useState } from 'react'
import Temperature from '../components/Temperature'
import Forecast from '../components/Forecast'
import Wind_details from '../components/Wind_details'

const Hero = () => {
    const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=7cb7ee110f8a52068ddf35954dcc9dc9`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      }).catch(err => console.error(err.message))
    };
    fetchData();

    // const foreCast = async()=>{
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     setLat(position.coords.latitude);
    //     setLon(position.coords.longitude);
    //   });
    //   await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=7cb7ee110f8a52068ddf35954dcc9dc9`)
    //   .then(res => res.json())
    //   .then(result => {
    //     setData(result)
    //     console.log(result);
    //   }).catch(err => console.error(err.message));
    // };
    // foreCast();
  }, [lat,lon])
  return (
    <>
      {(typeof data.main != 'undefined') ? (
        <div className="container mx-auto w-full h-[100svh] cont pt-[80px] px-2 pb-2 grid grid-cols-5">
            <Temperature weatherData={data}/>
            <Forecast/>
            <Wind_details windData={data}/>
        </div> 
      ): (
        <div></div>
      )}              
    </>
  )
}

export default Hero