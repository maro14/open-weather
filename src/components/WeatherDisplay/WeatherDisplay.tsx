import { WeatherData } from '../../types/weather'
import './WeatherDisplay.css'

interface WeatherDisplayProps {
  weather: WeatherData;
}

export function WeatherDisplay({ weather }: WeatherDisplayProps) {
  return (
    <div className="weather">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <div className="weather-info">
        <img 
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <div className="temperature">
          <p>Temperature: {Math.round(weather.main.temp)}°C</p>
          <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
        </div>
        <div className="details">
          <p>Conditions: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  )
} 