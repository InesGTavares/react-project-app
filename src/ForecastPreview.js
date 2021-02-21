import React from "react";
import WeatherIcon from "./WeatherIcon"

export default function ForecastPreview (props) {
    function hours () {
        let date = new Date(props.data.dt*1000)
        let hours =date.getHours()
        return `${hours}:00`
    }

    function temperature () {
      let temperature= Math.round(props.data.list[0].main.temp)
      return `${temperature}ºC`
    }

    return (
        <div className="col">
           {hours()}
           <span className="forecastIcon"><WeatherIcon code={props.data.list[0].weather[0].icon}/></span>
           {temperature()}
        </div>
    )
}
