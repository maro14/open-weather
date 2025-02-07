# Open Weather App

A modern, responsive weather application built with React, TypeScript, and Vite. Get real-time weather information for any city using the OpenWeatherMap API.

## Features

- 🌤 Real-time weather data
- 🔍 City search functionality
- 📱 Responsive design
- 💾 Recent searches history
- 🎨 Modern UI with animations
- 🔄 Loading states
- ⌨️ Keyboard navigation support

## Tech Stack

- React 18
- TypeScript
- Vite
- Axios
- OpenWeatherMap API
- React Spinners

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```plaintext
VITE_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

### Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Environment Variables

The following environment variables are required:

- `VITE_WEATHER_API_KEY`: Your OpenWeatherMap API key

## Project Structure

```
src/
├── components/
│   ├── LoadingSpinner/
│   ├── SearchBar/
│   ├── WeatherDisplay/
│   └── RecentSearches/
├── pages/
│   └── WeatherPage/
├── services/
│   └── weatherApi.ts
├── types/
│   └── weather.ts
└── hooks/
    └── useRecentSearches.ts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [React Spinners](https://www.npmjs.com/package/react-spinners) for loading animations
- [Vite](https://vitejs.dev/) for the build tooling

