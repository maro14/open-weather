import { useState } from 'react'
import './SearchBar.css'

interface SearchBarProps {
  onSearch: (city: string) => void;
  loading: boolean;
}

export function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [city, setCity] = useState('')

  const handleSearch = () => {
    onSearch(city)
  }

  return (
    <div className="search-container">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        onKeyPress={(e) => e.key === 'Enter' && !loading && handleSearch()}
        disabled={loading}
      />
      <button 
        onClick={handleSearch} 
        disabled={loading}
        className={loading ? 'loading' : ''}
      >
        {loading ? 'Searching...' : 'Get Weather'}
      </button>
    </div>
  )
} 