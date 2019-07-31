import React from "react";
import "./Result.css";

const Result = props => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    err
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <>
        <p className="main">
          Results for city <strong>{city}</strong>
        </p>
        <p>
          Date: <strong>{date}</strong>
        </p>
        <p>
          Temperature: <strong>{temp} &#176;C</strong>
        </p>
        <p>
          Sunrise: <strong>{sunriseTime}</strong>
        </p>
        <p>
          Sunset: <strong>{sunsetTime}</strong>
        </p>
        <p>
          Pressure: <strong>{pressure} hPa</strong>
        </p>
        <p>
          Wind speed: <strong>{wind} m/s</strong>
        </p>
      </>
    );
  }
  return (
    <>
      <div className="result">
        {err ? (
          <h3>
            City named "<strong>{city}</strong>" not found
          </h3>
        ) : (
          content
        )}
      </div>
    </>
  );
};

export default Result;
