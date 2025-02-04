import axios from 'axios'
import { WeatherData } from '../types/weather'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

if (!API_KEY) {
  throw new Error('Weather API key is missing! Make sure VITE_WEATHER_API_KEY is set in your .env file')
}

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

const weatherApi = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric' // This will return temperature in Celsius
  }
})

export const getWeatherByCity = async (city: string): Promise<WeatherData> => {
  try {
    const { data } = await weatherApi.get('', {
      params: { q: city }
    })
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Invalid API key. Please check your OpenWeatherMap API key configuration')
      }
      if (error.response?.status === 404) {
        throw new Error('City not found')
      }
      console.error('API Error:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      })
    }
    throw error
  }
} 