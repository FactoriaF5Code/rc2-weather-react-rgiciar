import './WeatherApp.css';

import search_icon from "../../assets/search.png";
import clear_icon from "../../assets/clear.png";
import cloud_icon from "../../assets/cloud.png";
import drizzle_icon from "../../assets/drizzle.png";
import rain_icon from "../../assets/rain.png";
import snow_icon from "../../assets/snow.png";
import wind_icon from "../../assets/wind.png";
import humidity_icon from "../../assets/humidity.png";


export const WeatherApp = () => {
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search' />
        <div className="searchIcon">
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weatherImage">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weatherTemp">24ºC</div>
      <div className="weatherLocation">London</div>
      <div className="dataContainer">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidityPercent">64%</div>
            <div className="text">Humidity</div>
          </div>
          <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidityPercent">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}