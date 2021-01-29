import React from "react";
import Icon from "../Util/Icons";

export default function CurrentWeather({ current }) {
  const { temp, feels_like, humidity, wind_speed, weather } = current;

  return (
    <div className="current-weather-wp">
      <h1>{temp}°</h1>
      <div className="current-weather_icon">
        <Icon {...weather[0]} />
        <h3>{weather[0].description}</h3>
      </div>
      <div className="current-weather_info">
        <h3>Feels like: {feels_like}°</h3>
        <h3>Humidity: {humidity}%</h3>
        <h3>Wind speed: {wind_speed} m/s</h3>
      </div>
    </div>
  );
}
