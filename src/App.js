import React, { useState } from 'react';
import './App.css';
import { fetchWeather } from './api/fetchWeather'

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState([])

  const handleChange = e => {
    setQuery(e.target.value)
  }

  const searchEnter = async (e) => {
    if(e.key === 'Enter') {
      const data = await fetchWeather(query)
      setWeather(data)
      setQuery('')
      console.log(weather.city.name)
    }
  }

  return (
    <div className="weather-app">
      <input type="text" className='searchbar' placeholder='Search a city' value={query} onChange={handleChange} onKeyPress={searchEnter} />
      {weather.main && ( 
        <div className="city">
          <h2 className="city-name">
            <span>{weather.city.name}</span>
            <sup>{weather.city.country}</sup>
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
