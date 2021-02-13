import React from "react"; 
import "./Weather.css" 

export default function Weather () {
    return (
        <div className="Weather">
                <form>
                    <input type="search" placeholder="Enter a city" className="Input"/>
                    <input type="submit" value="Search" className="Button" />
                    <input type="submit" value="📍 Current Location" className="Button" />
                </form>
            <div className="City">
                <h1>Lisbon</h1>
                <p>Saturday, 13 February</p>
            </div>
            <div className="row">
                <div className="col-2 icon">
                    image
                </div>
                <div className="col-2 main">
                    <div><h1 className="mainTemp">21º</h1></div>
                    <div className="description">Sunny</div>
                </div>
                <div className="col-2">
                    <div className="row">
                         <ul>
                            <li>19º</li>
                            <li>Maximum</li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul>
                            <li>15º</li>
                            <li>Minimum</li>
                        </ul>
                    </div>
                </div>
                <div className="col-2">
                     <div className="row">
                        <ul>
                            <li>20%</li>
                            <li>Precipitation</li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul>
                            <li>60%</li>
                            <li>Humidity</li>
                        </ul>
                    </div>
                </div>
                <div className="col-2">
                     <div className="row">
                        <ul>
                            <li>2 km/h</li>
                            <li>Wind</li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul>
                            <li>2 km/h</li>
                            <li>Wind</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
    ); 
}