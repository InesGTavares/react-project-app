import React from "react";
import WeatherIcon from "./WeatherIcon"
import "./Forecast.css"

export default function ForecastPreview (props) {
    function hours () {
        let date = new Date(props.data.dt * 1000)
        let hours =date.getHours();
        return `${hours}:00`
    }

    function temperature () {
      let temperature= Math.round(props.data.main.temp)
      return `${temperature}ºC`
    }

    return (
        <div className="col">
           <h5>{hours()}</h5>
           <div className="forecastIcon"><WeatherIcon code={props.data.weather[0].icon}/></div>
           <h5>{temperature()}</h5>
        </div>
    )
}
