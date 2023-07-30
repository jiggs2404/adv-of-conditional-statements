import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState('');

  const callWeatherWizard = (condition) => {
    if (condition === 'clear') {
      setWeather('Sunny Sam made it a bright and sunny day!');
    } else if (condition === 'dark clouds') {
      setWeather('Rainy Rachel brought refreshing rain to the land!');
    } else if (condition === 'some clouds') {
      setWeather('Cloudy Charlie covered the sky with fluffy clouds!');
    } else {
      setWeather('Oops! Invalid condition. Please choose one of: clear, dark clouds, some clouds.');
    }
  };

  return (
    <div className="App">
      <h1>Weather Wizards of Conditopia</h1>
      <div className="buttons">
        <button onClick={() => callWeatherWizard('clear')}>Call Sunny Sam</button>
        <button onClick={() => callWeatherWizard('dark clouds')}>Call Rainy Rachel</button>
        <button onClick={() => callWeatherWizard('some clouds')}>Call Cloudy Charlie</button>
      </div>
      <div className="result">{weather}</div>
    </div>
  );
};

export default App;
