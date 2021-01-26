import React from "react";

export default function CurrentWeather({ current }) {
  const { temp, feels_like, humidity, wind_speed, weather } = current;

  console.log();
  return (
    <div className="current-weather-wp">
      <h1>{temp}°</h1>
      <div className="current-weather_icon">
        <img src={weather[0].icon} alt="icon" />
        <p>{weather[0].description}</p>
      </div>
      <div className="current-weather_info">
        <h3>Feels like: {feels_like}°</h3>
        <h3>Humidity: {humidity}%</h3>
        <h3>Wind speed: {wind_speed}</h3>
      </div>
    </div>
  );
}
