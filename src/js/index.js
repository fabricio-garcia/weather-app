import Weather from './weather';

require('../css/style.css');

const weather = new Weather('London', 'uk');

async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather);