import { useState, useEffect } from 'react'

const MAX_RECENT_SEARCHES = 5
const STORAGE_KEY = 'recentSearches'

export function useRecentSearches() {
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recentSearches))
  }, [recentSearches])

  const addSearch = (city: string) => {
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item.toLowerCase() !== city.toLowerCase())
      return [city, ...filtered].slice(0, MAX_RECENT_SEARCHES)
    })
  }

  const clearSearches = () => {
    setRecentSearches([])
  }

  return { recentSearches, addSearch, clearSearches }
} 