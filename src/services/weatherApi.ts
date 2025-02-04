import axios from 'axios'
import { WeatherData } from '../types/weather'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const weatherApi = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric'
  }
})

export const getWeatherByCity = async (city: string): Promise<WeatherData> => {
  const { data } = await weatherApi.get('/weather', {
    params: { q: city }
  })
  return data
} 