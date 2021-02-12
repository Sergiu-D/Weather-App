import React, { useState, useEffect } from "react";
import { Line } from "@reactchartjs/react-chart.js";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],

  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    //   {
    //     label: "My Second dataset",
    //     backgroundColor: "rgba(157, 191, 158,0.2)",
    //     borderColor: "rgba(56, 86, 57,1)",
    //     borderWidth: 1,
    //     hoverBackgroundColor: "rgba(56, 86, 57,1)",
    //     hoverBorderColor: "rgba(157, 191, 158,0.2)",
    //     data: [40, 70, 35, 51, 24, 65, 80],
    //   },
  ],
};

function HourlyWeather({ hourly }) {
  // const hour = hourly.map((element, index) => element[index].temp);
  // const [hourlyTemp, setHourlyTemp] = useState([]);

  // const setHourlyTemp = [];

  // function getHourlyData() {
  //   for (let i = 0; i < hourly.length; i++) {
  //     setHourlyTemp.push(hourly[i].temp);
  //   }
  //   return;
  // }
  // getHourlyData();
  // useEffect(() => {
  //   setHourlyTemp(getHourlyTemp);
  // }, [getHourlyTemp]);

  // console.log(hourlyTemp);

  let dataChart = { ...data };
  console.log(dataChart);

  dataChart.labels = [];
  dataChart.datasets[0].data = [];

  for (let i = 0; i < 11; i++) {
    dataChart.labels.push(hourly[i].dt);
    dataChart.datasets[0].data.push(hourly[i].temp);
  }

  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      <Line
        data={dataChart}
        width={100}
        height={15}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  display: false,
                },
              },
            ],
          },
          legend: {
            display: true,
            position: "bottom",
          },
          maintainAspectRatio: true,
          responsive: true,
        }}
      />
    </div>
  );
}

export default HourlyWeather;
