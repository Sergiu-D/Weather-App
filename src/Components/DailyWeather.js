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
    <div
      className={day === currentDay ? "weather-card active" : "weather-card"}
      key={weather[0].id}
    >
      <h3>
        {weekday} {day}
      </h3>
      <Icon {...weather[0]} />
      <h3 className="temp">
        {Math.trunc(temp.day)}° <span>{Math.trunc(temp.night)}°</span>
      </h3>
      <h3>{weather[0].description}</h3>
    </div>
  );
}

export default function DailyWeather({ daily }) {
  return (
    <div className="weather-daily-wp">
      {daily.map((dayInfo) => {
        return <Day {...dayInfo} />;
      })}
    </div>
  );
}
