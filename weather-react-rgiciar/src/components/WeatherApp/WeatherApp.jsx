import './WeatherApp.css';

import { useState } from 'react';

import search_icon from "../../assets/search.svg";
import clear_icon from "../../assets/clear.svg";
import cloud_icon from "../../assets/cloud.svg";
import drizzle_icon from "../../assets/drizzle.svg";
import rain_icon from "../../assets/rain.svg";
import snow_icon from "../../assets/snow.svg";
import wind_icon from "../../assets/wind.svg";
import humidity_icon from "../../assets/humidity.svg";


export const WeatherApp = () => {

  let apiKey = "83492bb07531fba9717096bba091d440";

  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value==="") {
      return 0;
    }
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();
    
    const humidity = document.getElementsByClassName("humidityPercent");
    const wind = document.getElementsByClassName("windRate");
    const temperature = document.getElementsByClassName("weatherTemp");
    const location = document.getElementsByClassName("weatherLocation");

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp)+"ºC";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon==="01d" || data.weather[0].icon==="01n") {
      setWicon(clear_icon);
    } 
    else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n") {
      setWicon(cloud_icon);
    } 
    else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n") {
      setWicon(drizzle_icon);
    }
    else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n") {
      setWicon(drizzle_icon);
    }
    else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n") {
      setWicon(rain_icon);
    }
    else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n") {
      setWicon(rain_icon);
    }
    else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n") {
      setWicon(snow_icon);
    }
    else {
      setWicon(clear_icon);
    }

  }

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Buscar una ciudad' />
        <div className="searchIcon" onClick={()=>{search()}}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weatherImage">
        <img src={wicon} alt="" />
      </div>
      <div className="weatherTemp">15ºC</div>
      <div className="weatherLocation">London</div>
      <div className="dataContainer">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidityPercent">64%</div>
            <div className="text">Humedad</div>
          </div>
          <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="windRate">18 km/h</div>
            <div className="text">Viento</div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}