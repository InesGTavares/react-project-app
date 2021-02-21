import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview"
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./Forecast.css"

export default function Forecast (props) {
    const [loaded, setLoaded] = useState(false); 
    const [forecast, setForecast] = useState(null); 
    function handleForecast (response) {
        setLoaded(true);
        setForecast(response.data);
    }
    
if (loaded && props.city === forecast.city.name) {
    return (
         <div className="forecast row">
             <ForecastPreview data={forecast.list[0]}/>
             <ForecastPreview data={forecast.list[0]}/>
             <ForecastPreview data={forecast.list[0]}/>
             <ForecastPreview data={forecast.list[0]}/>
             <ForecastPreview data={forecast.list[0]}/>
             <ForecastPreview data={forecast.list[0]}/>
        </div>
    )
} else {
    const apiKey = "920f02ae74621e7f631d2e3243d16c67";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast); 

    return null;
}
}