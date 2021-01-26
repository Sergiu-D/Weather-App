import React from "react";
import Date from "../Util/Date";

export default function DailyWeather({ daily }) {
  return (
    <div className="weather-daily-wp">
      {daily.map((daily) => {
        const { dt, weather, temp } = daily;
        const { weekday, day } = Date(dt);

        return (
          <div className="weather-card">
            <h3>
              {weekday}, {day}
            </h3>
            <h4>icon</h4>
            <h3>
              {temp.day} <span>{temp.night}</span>
            </h3>
            <h3>Description</h3>
          </div>
        );
      })}
    </div>
  );
}
