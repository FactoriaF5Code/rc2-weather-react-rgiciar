// PronosticoDias.jsx
import "./PronosticoDias.css";

import { useState, useEffect } from "react";

import clear_icon from "../../assets/clear.svg";
import cloud_icon from "../../assets/cloud.svg";
import drizzle_icon from "../../assets/drizzle.svg";
import rain_icon from "../../assets/rain.svg";
import snow_icon from "../../assets/snow.svg";

export const PronosticoDias = ({ location }) => {
  let apiKey = "83492bb07531fba9717096bba091d440";
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=Metric&appid=${apiKey}`
      );
      const data = await response.json();
      setForecast(data.list);
    };

    fetchForecast();
  }, [location]);

  const groupForecastByDay = (forecast) => {
    const groupedForecast = {};
    forecast.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!groupedForecast[date]) {
        groupedForecast[date] = [];
      }
      groupedForecast[date].push(item);
    });
    return groupedForecast;
  };

  const iconMap = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": drizzle_icon,
    "03n": drizzle_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  return (
    <section className="proximosDias">
      <div className="forecast-days">
        {Object.entries(groupForecastByDay(forecast)).map(([date, dayForecast]) => (
          <div key={date} className="forecast-day">
          <div>{new Date(date).toLocaleDateString("es-ES", { weekday: "long" }).toUpperCase()}</div>
            <img src={iconMap[dayForecast[0].weather[0].icon]} alt={dayForecast[0].weather[0].description} />
            <div>
              {Math.round(Math.max(...dayForecast.map(item => item.main.temp_max)))}°C -{" "}
              {Math.round(Math.min(...dayForecast.map(item => item.main.temp_min)))}°C
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
