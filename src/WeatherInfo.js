import React from "react";
import FormDate from "./FormDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo (props) {
    return (
        <div className="WeatherInfo">
        <div className="City">
                <h1>{props.data.city}</h1>
                <p><FormDate date={props.data.date}/></p>
            </div>
            <div className="row">
                <div className="col-2 icon">
                    <WeatherIcon code={props.data.icon} alt={props.data.description}/>
                    
                </div>
                <div className="col-2 main">
                    <div><h1 className="mainTemp">{Math.round(props.data.temperature)}º</h1></div>
                    <div className="description">{props.data.description}</div>
                </div>
                <div className="col-2">
                    <div className="row">
                         <ul>
                            <li>{Math.round(props.data.maxTemp)}º</li>
                            <li>Maximum</li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul>
                            <li>{Math.round(props.data.minTemp)}º</li>
                            <li>Minimum</li>
                        </ul>
                    </div>
                </div>
                <div className="col-2">
                     <div className="row">
                        <ul>
                            <li>{props.data.pressure} hPa</li>
                            <li>Pressure</li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul>
                            <li>{props.data.humidity}%</li>
                            <li>Humidity</li>
                        </ul>
                    </div>
                </div>
                <div className="col-2">
                     <div className="row">
                        <ul>
                            <li>{Math.round(props.data.wind)} km/h</li>
                            <li>Wind</li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul>
                            <li>{Math.round(props.data.feelsLike)}º</li>
                            <li>Feels like</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div> 
    )
}