import './RecentSearches.css'

interface RecentSearchesProps {
  searches: string[]
  onSelect: (city: string) => void
  onClear: () => void
}

export function RecentSearches({ searches, onSelect, onClear }: RecentSearchesProps) {
  if (searches.length === 0) return null

  return (
    <div className="recent-searches">
      <div className="recent-header">
        <h3>Recent Searches</h3>
        <button onClick={onClear} className="recent-clear-button">
          Clear
        </button>
      </div>
      <div className="recent-list">
        {searches.map((city) => (
          <button
            key={city}
            onClick={() => onSelect(city)}
            className="city-button"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  )
} 