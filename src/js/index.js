import Weather from './weather';
import Dom from './dom';

require('../css/style.css');

const dom = new Dom();
const weather = new Weather('London', 'uk');

async function fetchWeather() {
  const data = await weather.getWeather();
  dom.render(data);
}

document.getElementById('search-location').addEventListener('click', (evt) => {
  evt.preventDefault();
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('country-code').value;
  weather.searchLocation(city, countryCode);
  fetchWeather();
});

document.addEventListener('DOMContentLoaded', fetchWeather);