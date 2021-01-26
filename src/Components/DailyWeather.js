import React from "react";
import Date from "../Util/Date";
import Icon from "../Util/Icons";

// TODO Functie noua care sa returneze cate o ziua.

function Day({ dt, weather, temp }) {
  const { weekday, day } = Date(dt);

  return (
    <div className="weather-card">
      <h3>
        {weekday}, {day}
      </h3>
      <Icon {...weather[0]} />
      <h3>
        {temp.day} <span>{temp.night}</span>
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
