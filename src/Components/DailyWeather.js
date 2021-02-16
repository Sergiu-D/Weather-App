import React from "react";
import DateUTC from "../Util/Date";
import Icon from "../Util/Icons";

function Day({ dt, weather, temp }) {
  // Get current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  // get API date
  const { weekday, day } = DateUTC(dt);

  return (
    <div className="weather-card">
      <h3 className="weather-card_weekday">
        {weekday} {day}
      </h3>
      <div className="weather-card_temp-wp">
        <Icon {...weather[0]} />
        <h3 className="weather-card_description">{weather[0].description}</h3>
      </div>
      <h3 className="temp">
        {Math.trunc(temp.day)}° <span>{Math.trunc(temp.night)}°</span>
      </h3>
    </div>
  );
}

export default function DailyWeather({ daily }) {
  return (
    <div className="weather-daily-wp">
      {daily.map((dayInfo, index) => {
        return <Day {...dayInfo} key={index} />;
      })}
    </div>
  );
}
