import React from "react";

const WeatherCard = () => {
  return (
    <li className="city">
      <h2 className="city-name">
        <span>name</span>
        <sup>country</sup>
      </h2>
      <div className="city-temp">
        temp
        <sup>°C</sup>
      </div>
      <figure>
        <img className="city-icon" src="" alt="city-icon" />
        <figcaption>description</figcaption>
      </figure>
    </li>
  );
};

export default WeatherCard;
