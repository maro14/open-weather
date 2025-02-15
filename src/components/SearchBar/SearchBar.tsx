// SearchBar.tsx
import React, { useState } from 'react'
import './SearchBar.css'

interface SearchBarProps {
  onSearch: (city: string) => void;
  loading: boolean;
}

export function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [city, setCity] = useState('')
  const [error, setError] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedCity = city.trim()
    
    if (trimmedCity) {
      setError('')
      onSearch(trimmedCity)
    } else {
      setError('Please enter a city name')
    }
  }

  const handleClear = () => {
    setCity('')
    setError('')
  }

  return (
    <form className="search-container" onSubmit={handleSearch} role="search">
      <input
        type="search"
        id="citySearch"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        disabled={loading}
        aria-label="Search for a city"
        aria-invalid={!!error}
        aria-describedby={error ? "searchError" : undefined}
      />
      <button 
        type="submit"
        className="search-button"
        disabled={loading}
        aria-label={loading ? 'Searching...' : 'Search weather'}
      >
        {loading ? 'Searching...' : 'Get Weather'}
      </button>
      <button 
        type="button"
        className="clear-button"
        onClick={handleClear}
        disabled={loading || !city}
        aria-label="Clear search"
      >
        Clear
      </button>
      {error && (
        <p id="searchError" className="error-message" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}
