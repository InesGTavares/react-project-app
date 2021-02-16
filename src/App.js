import React from "react"; 
import "./App.css"; 
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Lisbon"/>
        <footer>This project was coded by Inês Tavares and is open-source on <a href="https://github.com/InesGTavares/react-project-app"
          target="_blank"
        >GitHub</a>
        </footer>
        </div>
    </div>
  );
}