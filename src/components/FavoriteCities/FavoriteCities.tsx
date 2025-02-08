import{ useState } from 'react'
import './FavoriteCities.css'

interface FavoriteCitiesProps {
  favorites: string[]
  onSelect: (city: string) => void
  onAdd: (city: string) => void
  onRemove: (city: string) => void
}

export function FavoriteCities({ favorites, onSelect, onAdd, onRemove }: FavoriteCitiesProps) {
  const [newFavorite, setNewFavorite] = useState('')

  const handleAdd = () => {
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
            <button onClick={() => onSelect(city)}>{city}</button>
            <button onClick={() => onRemove(city)}>Remove</button>
          </div>
        ))}
      </div>
      <input 
        type="text"
        value={newFavorite}
        onChange={(e) => setNewFavorite(e.target.value)}
        placeholder="Add a new favorite city"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}
