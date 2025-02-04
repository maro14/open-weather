import { useState } from 'react'
import axios from 'axios'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { WeatherDisplay } from '../../components/WeatherDisplay/WeatherDisplay'
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner'
import { RecentSearches } from '../../components/RecentSearches/RecentSearches'
import { WeatherData } from '../../types/weather'
import { getWeatherByCity } from '../../services/weatherApi'
import { useRecentSearches } from '../../hooks/useRecentSearches'
import './WeatherPage.css'

export function WeatherPage() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { recentSearches, addSearch, clearSearches } = useRecentSearches()

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
      addSearch(city) // Add to recent searches
    } catch (err) {
      console.error('Error details:', err)
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.status === 404
            ? 'City not found'
            : `Error: ${err.response?.data?.message || err.message}`
        )
      } else {
        setError('Failed to fetch weather data')
      }
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="weather-page">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} loading={loading} />
      <RecentSearches 
        searches={recentSearches}
        onSelect={handleSearch}
        onClear={clearSearches}
      />
      {error && <div className="error">{error}</div>}
      {loading ? (
        <LoadingSpinner />
      ) : (
        weather && <WeatherDisplay weather={weather} />
      )}
    </div>
  )
} 