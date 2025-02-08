import { useState } from 'react';
import { WeatherData } from '../../types/weather'
import './WeatherDisplay.css'

interface WeatherDisplayProps {
  weather: WeatherData;
}

export function WeatherDisplay({ weather }: WeatherDisplayProps) {
  const [useCelsius, setUseCelsius] = useState(true);

  const toggleUnit = () => setUseCelsius(!useCelsius);

  const convertTemp = (temp: number) => {
    if (useCelsius) return Math.round(temp);
    return Math.round((temp * 9/5) + 32);
  };

  const unitSymbol = useCelsius ? '°C' : '°F';

  return (
    <div className="weather">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <div className="weather-info">
        <img 
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <div className="temperature">
          <p>Temperature: {convertTemp(weather.main.temp)}{unitSymbol}</p>
          <p>Feels like: {convertTemp(weather.main.feels_like)}{unitSymbol}</p>
          <button onClick={toggleUnit}>Switch to {useCelsius ? '°F' : '°C'}</button>
        </div>
        <div className="details">
          <p>Conditions: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      </div>
      <p className="update-time">Last updated: {new Date(weather.dt * 1000).toLocaleString()}</p>
    </div>
  )
} 
