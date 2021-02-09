import React, { useState, useEffect } from "react";
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line } from "react-chartjs-2";

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

  // const getHourlyTemp = [];

  // function getHourlyData() {
  //   for (let i = 0; i < hourly.length; i++) {
  //     getHourlyTemp.push(hourly[i].temp);
  //   }
  //   return;
  // }
  // getHourlyData();

  // useEffect(() => {
  //   setHourlyTemp(getHourlyTemp);
  // }, [getHourlyTemp]);

  // console.log(hourlyTemp);

  // RTFM

  function computeNumPoints() {
    const ww = window.innerWidth
    let _numPoints = 6
    if (ww >= 640) {
      _numPoints = 12
    }
    if (ww >= 720) {
      _numPoints = 18
    }
    if (ww >= 1024) {
      _numPoints = 24
    }
    // console.log(`pts: ${_numPoints}`)
    return _numPoints
  }

  //NOTE stiu ca-l fut
  const graphData = { ...data };

  graphData.labels = []
  graphData.datasets[0].data = []
  const [numPoints, setNumPoints] = useState(computeNumPoints())

  useEffect(() => {
    console.log('Observing resize')
    const listener = () => {


      const newValue = computeNumPoints()
      if (numPoints !== newValue) {
        console.log(`Resized to ${window.innerWidth}, oldpts:${numPoints} pts: ${newValue}`)
        setNumPoints(newValue)
      }

    }

    window.addEventListener('resize', listener)

    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', listener)
    }

  }, [numPoints])



  for (let i = 0; i < numPoints; i++) {
    // getHourlyTemp.push(hourly[i].temp);
    const formatttedDate = new Date(hourly[i].dt * 1000).getHours()
    graphData.labels.push(formatttedDate)
    graphData.datasets[0].data.push(parseInt(hourly[i].temp))
  }


  return (
    <div>
      <h2>Bar Example (custom size)</h2>

      <div style={{ position: 'relative', height: '240px', width: '90%' }}>
        <Line
          data={graphData}
          // width={window.innerWidth - 100}
          // height={150}
          options={{
            layout: {
              padding: 35,
            },
            plugins: {
              // Change options for ALL labels of THIS CHART
              datalabels: {
                color: '#36A2EB',
                offset: -30,
                align: 'start',
                anchor: 'end',
              }
            },

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
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      </div>
    </div>
  );
}

export default HourlyWeather;
