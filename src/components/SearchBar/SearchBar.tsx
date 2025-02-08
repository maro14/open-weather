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
    if (city.trim()) {
      setError('')
      onSearch(city.trim())
    } else {
      setError('Please enter a city name')
    }
  }

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <input
        id="cityInput"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && !loading && handleSearch(e)}
        placeholder="Enter city name"
        disabled={loading}
        aria-invalid={!!error}
        aria-describedby={error ? "errorMessage" : undefined}
      />
      <button 
        type="submit"
        disabled={loading}
        className={loading ? 'loading' : ''}
        aria-label={loading ? 'Searching' : 'Get Weather'}
      >
        {loading ? 'Searching...' : 'Get Weather'}
      </button>
      <button 
        type="button"
        onClick={() => setCity('')}
        disabled={loading}
        aria-label="Clear"
      >
        Clear
      </button>
      {error && <p id="errorMessage" className="error-message">{error}</p>}
    </form>
  )
}
