import React from "react";

import Loading from "./Loading";

import useSWR from "swr";
import fetcher from "../fetcher";

export default function Location({ latitude, longitude }) {
  const locationURL = `https://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt=5&appid=faa43b230bd3f3f5c33027ab0a77b157`;

  const { data, error } = useSWR(locationURL, fetcher);
  if (error) return <h1>Error...</h1>;
  if (!data) return <Loading />;

  const { list } = data;
  return (
    <div>
      <h2 className="location-wp">
        {list[0].name},{" "}
        <span style={{ color: "orangered" }}>{list[0].sys.country}</span>
      </h2>
    </div>
  );
}
