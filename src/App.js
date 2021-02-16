import React, { useState } from "react";

// Components
import Loading from "./Components/Loading";
import NoPosition from "./Components/NoPosition";
import Location from "./Components/Location";
import Clock from "./Components/Clock";
import CurrentWeather from "./Components/CurrentWeather";
import DailyWeather from "./Components/DailyWeather";
import HourlyWeather from "./Components/HourlyWeather";

// Utilities
import useSWR from "swr";
import fetcher from "./fetcher";
import "weather-icons/css/weather-icons.css";

const weatherDataURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=$$lat&lon=$$lon&exclude=minutely&appid=faa43b230bd3f3f5c33027ab0a77b157&units=metric";

function App() {
  const [position, setPosition] = useState({
    latitude: 15.5016,
    longitude: 47.4248,
  });

  const [geolocationStatus, setGeolocationStatus] = useState({
    status: false,
    response: false,
  });

  const [width, setWidth] = useState([window.innerWidth]);

  // ======= Get geolocation ========

  const geolocation = navigator.geolocation;

  geolocation.getCurrentPosition(getGeolocationSuccess, getGeolocationError);

  function getGeolocationSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setPosition({
      latitude: latitude,
      longitude: longitude,
    });
    setGeolocationStatus({ status: true, response: true });
  }

  function getGeolocationError() {
    setGeolocationStatus({ status: true, response: false });
  }

  // ======= Fetching Data ========

  const { latitude, longitude } = position;

  let replaceURL = weatherDataURL.replace("$$lat", latitude);
  replaceURL = replaceURL.replace("$$lon", longitude);

  const { data, error } = useSWR(replaceURL, fetcher);
  if (error) return <h1>Error...</h1>;
  if (!data) return <Loading message={"Weather data is loading..."} />;

  // ======= Waiting For Response ========

  if (!geolocationStatus.status && !geolocationStatus.response) {
    return <Loading />;
  }

  if (geolocationStatus.status && !geolocationStatus.response) {
    return <NoPosition />;
  }

  const { current, daily, hourly } = data;

  function windowWidth() {
    setWidth(window.innerWidth);
  }

  window.removeEventListener("resize", windowWidth);
  window.addEventListener("resize", windowWidth);

  return (
    <div className="container">
      {width <= 640 ? (
        <>
          <section className="current-section">
            <Location {...position} />
            <div className="cw-wrapper">
              <Clock />
              <CurrentWeather current={current} />
            </div>
          </section>
          <section className="hourly-section">
            <DailyWeather daily={daily} />
            <HourlyWeather hourly={hourly} />
          </section>
        </>
      ) : (
        <>
          <section id="current-section">
            <Location {...position} />
            <div className="cw-wrapper">
              <Clock />
              <CurrentWeather current={current} />
            </div>
            <DailyWeather daily={daily} />
          </section>
          <section id="hourly-section">
            <HourlyWeather hourly={hourly} />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
