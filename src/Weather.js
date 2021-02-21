import React, { useState } from "react"; 
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast"
import axios from "axios";
import "./Weather.css";

export default function Weather (props) {
    const [weatherData, setWeatherData]=useState({ready: false});
    const [city, setCity]=useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt * 1000),
            city: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            maxTemp: response.data.main.temp_max,
            minTemp: response.data.main.temp_min,
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            feelsLike: response.data.main.feels_like
        }); 
    }

     function search () {
        const apiKey = "920f02ae74621e7f631d2e3243d16c67";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit (event) {
        event.preventDefault();
        search();
    }

    function handleCityChange (event) {
        setCity(event.target.value);
    }
    
    if (weatherData.ready) {
        return (
        <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <input type="search" placeholder="Enter a city" className="Input" onChange={handleCityChange}/>
                    <input type="submit" value="Search" className="Button" />
                    <input type="submit" value="📍 Current Location" className="Button" />
                </form>
        <WeatherInfo data={weatherData}/>
        <Forecast city={weatherData.city}/>
        </div>)
    } else {
        search();
        return "Loading...";
    }
}