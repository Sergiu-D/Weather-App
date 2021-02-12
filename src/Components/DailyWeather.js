import React from "react";
import DateUTC from "../Util/Date";
import Icon from "../Util/Icons";

function Day({ dt, weather, temp }) {
  // Get current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  // get API date
  const { weekday, day } = DateUTC(dt);

  function listener() {
    console.log(`Resized to: ${window.innerWidth}`);
  }

  window.addEventListener("resize", listener);

  return (
    <div
      className={day === currentDay ? "weather-card active" : "weather-card"}
    >
      <h3>
        {weekday} {day}
      </h3>
      <Icon {...weather[0]} />
      <h3 className="temp">
        {Math.trunc(temp.day)}° <span>{Math.trunc(temp.night)}°</span>
      </h3>
      <div className="weather-card_description">
        <h3>{weather[0].description}</h3>
      </div>
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
