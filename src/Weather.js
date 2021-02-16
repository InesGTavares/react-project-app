import React, { useState } from "react"; 
import FormDate from "./FormDate"
import axios from "axios";
import "./Weather.css" 

export default function Weather (props) {
    const [weatherData, setWeatherData]=useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt*1000),
            city: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            maxTemp: response.data.main.temp_max,
            minTemp: response.data.main.temp_min,
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            feelsLike: response.data.main.feels_like
        }); 
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
                <form>
                    <input type="search" placeholder="Enter a city" className="Input"/>
                    <input type="submit" value="Search" className="Button" />
                    <input type="submit" value="📍 Current Location" className="Button" />
                </form>
            <div className="City">
                <h1>Lisbon</h1>
                <p><FormDate date={weatherData.date}/></p>
            </div>
            <div className="row">
                <div className="col-2 icon">
                    image
                </div>
                <div className="col-2 main">
                    <div><h1 className="mainTemp">{Math.round(weatherData.temperature)}º</h1></div>
                    <div className="description">{weatherData.description}</div>
                </div>
                <div className="col-2">
                    <div className="row">
                         <ul>
                            <li>{Math.round(weatherData.maxTemp)}º</li>
                            <li>Maximum</li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul>
                            <li>{Math.round(weatherData.minTemp)}º</li>
                            <li>Minimum</li>
                        </ul>
                    </div>
                </div>
                <div className="col-2">
                     <div className="row">
                        <ul>
                            <li>{weatherData.pressure} hPa</li>
                            <li>Pressure</li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul>
                            <li>{weatherData.humidity}%</li>
                            <li>Humidity</li>
                        </ul>
                    </div>
                </div>
                <div className="col-2">
                     <div className="row">
                        <ul>
                            <li>{Math.round(weatherData.wind)} km/h</li>
                            <li>Wind</li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul>
                            <li>{Math.round(weatherData.feelsLike)}º</li>
                            <li>Feels like</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
    ); 
    } else {
        const apiKey = "fbdebe859d92ee367c7d2b2e8432820e";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
    
}