import { useState } from 'react'
import './FavoriteCities.css'

interface FavoriteCitiesProps {
  favorites: string[]
  onSelect: (city: string) => void
  onAdd: (city: string) => void
  onRemove: (city: string) => void
}

export function FavoriteCities({ favorites, onSelect, onAdd, onRemove }: FavoriteCitiesProps) {
  const [newFavorite, setNewFavorite] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newFavorite.trim()) {
      onAdd(newFavorite.trim())
      setNewFavorite('')
    }
  }

  return (
    <div className="favorite-cities">
      <h3>Favorite Cities</h3>
      <div className="favorite-list">
        {favorites.map(city => (
          <div key={city} className="favorite-item">
            <button 
              className="city-select-btn"
              onClick={() => onSelect(city)}
            >
              {city}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button 
              className="remove-btn"
              onClick={() => onRemove(city)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              Remove
            </button>
          </div>
        ))}
      </div>
      <form className="add-favorite-form" onSubmit={handleSubmit}>
        <input 
          type="text"
          value={newFavorite}
          onChange={(e) => setNewFavorite(e.target.value)}
          placeholder="Add a new favorite city"
          aria-label="New favorite city name"
        />
        <button 
          type="submit" 
          className="add-btn"
          disabled={!newFavorite.trim()}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          Add
        </button>
      </form>
    </div>
  )
}
