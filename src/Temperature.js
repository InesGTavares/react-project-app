import React, { useState } from "react";

export default function Temperature (props) {
    const [unit, setUnit]=useState("celsius");
    
    function showF (event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function showC (event) {
        event.preventDefault();
        setUnit("celsius");
    }
     
    if (unit === "celsius") {
        return (
        <div>
            <h1 className="mainTemp">{Math.round(props.celsius)}
            <span className="unit"> ºC | <a href="/" onClick={showF}>ºF</a></span>
            </h1>
            </div>
    )
    } else {
        let fahrenheit=(props.celsius * 9/5)+32;
        return (
        <div>
            <h1 className="mainTemp">{Math.round(fahrenheit)}
            <span className="unit"> <a href="/" onClick={showC}>ºC</a> | ºF</span>
            </h1>
            </div>
    )
    }
    
}