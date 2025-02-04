import { WeatherData } from '../../types/weather'
import './WeatherDisplay.css'

interface WeatherDisplayProps {
  weather: WeatherData;
}

export function WeatherDisplay({ weather }: WeatherDisplayProps) {
  return (
    <div className="weather">
      <h2>{weather.name}</h2>
      <div className="weather-info">
        <img 
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p>Temperature: {Math.round(weather.main.temp)}°C</p>
        <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Conditions: {weather.weather[0].description}</p>
      </div>
    </div>
  )
} 