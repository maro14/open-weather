import { useState } from 'react'
import axios from 'axios'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { WeatherDisplay } from '../../components/WeatherDisplay/WeatherDisplay'
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner'
import { RecentSearches } from '../../components/RecentSearches/RecentSearches'
import { WeatherData } from '../../types/weather'
import { getWeatherByCity } from '../../services/weatherApi'
import { useRecentSearches } from '../../hooks/useRecentSearches'
import { FavoriteCities } from '../../components/FavoriteCities/FavoriteCities'
import './WeatherPage.css'

export function WeatherPage() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { recentSearches, addSearch, clearSearches } = useRecentSearches()
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [favorites, setFavorites] = useState<string[]>([])

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
      setLastUpdated(new Date())
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

  const addFavorite = (city: string) => {
    setFavorites(prev => [...new Set([city, ...prev])])
  }

  const removeFavorite = (city: string) => {
    setFavorites(prev => prev.filter(fav => fav !== city))
  }

  return (
    <div className="weather-page">
      <h1>Open Weather</h1>
      <SearchBar onSearch={handleSearch} loading={loading} />
      <RecentSearches 
        searches={recentSearches}
        onSelect={handleSearch}
        onClear={clearSearches}
      />
      {lastUpdated && <p>Last updated: {lastUpdated.toLocaleString()}</p>}
      <FavoriteCities 
        favorites={favorites}
        onSelect={handleSearch}
        onAdd={addFavorite}
        onRemove={removeFavorite}
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