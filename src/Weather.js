import React from "react"; 
import "./Weather.css" 

export default function Weather () {
    return (
        <div className="Weather">
                <form>
                    <input type="search" placeholder="Enter a city" />
                    <input type="submit" value="Search" className="Button" />
                    <input type="submit" value="📍 Current Location" className="Button" />
                </form>
            <div>
                <h1>Lisbon</h1>
                <h3>Saturday, 13 February</h3>
            </div>
            <div className="row">
                <div className="col-4">
                    image
                </div>
                <div className="col-2">
                    <h1 className="currentTemp">20 ºC</h1>
                    <h3>description</h3>
                </div>
                <div className="col-2">
                    <div className="row">
                        high
                    </div>
                    <div className="row">
                        low
                    </div>
                </div>
                <div className="col-2">
                     <div className="row">
                        Precipitation
                    </div>
                    <div className="row">
                        Humidity
                    </div>
                </div>
                <div className="col-2">
                     <div className="row">
                        Wind
                    </div>
                    <div className="row">
                        something else
                    </div>
                </div>
            </div>
            </div>
    ); 
}