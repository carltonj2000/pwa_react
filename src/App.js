import React from "react";

import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

const App = () => {
  const [query, querySet] = React.useState("");
  const [weather, weatherSet] = React.useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      weatherSet(data);
      querySet("");
    }
  };

  const cityIcon = () =>
    `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => querySet(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;F</sup>
          </div>
          <div className="info">
            <img src={cityIcon()} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
