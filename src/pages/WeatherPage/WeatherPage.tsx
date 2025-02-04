import { useState } from 'react'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { WeatherDisplay } from '../../components/WeatherDisplay/WeatherDisplay'
import { WeatherData } from '../../types/weather'
import { getWeatherByCity } from '../../services/weatherApi'
import './WeatherPage.css'
import axios from 'axios'

export function WeatherPage() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async (city: string) => {
    if (!city.trim()) {
      setError('Please enter a city name')
      return
    }

    try {
      setLoading(true)
      setError('')
      const data = await getWeatherByCity(city)
      setWeather(data)
    } catch (err) {
      setError(
        axios.isAxiosError(err) && err.response?.status === 404
          ? 'City not found'
          : 'Failed to fetch weather data'
      )
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="weather-page">
      <h1>Open Weather</h1>
      <SearchBar onSearch={handleSearch} loading={loading} />
      {error && <div className="error">{error}</div>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  )
} 