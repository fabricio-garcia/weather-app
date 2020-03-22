import Weather from './weather';
import Dom from './dom';
import LocalStorage from './localStorage';

require('../css/style.css');

const dom = new Dom();
const localStorage = new LocalStorage();
const { city, countryCode } = localStorage.getLocationData();
const weather = new Weather(city, countryCode);

async function fetchWeather() {
  const data = await weather.getWeather();
  dom.render(data);
}

document.getElementById('search-location').addEventListener('click', (evt) => {
  evt.preventDefault();
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('country-code').value;
  weather.searchLocation(city, countryCode);
  localStorage.setLocationData(city, countryCode);
  fetchWeather();
});

document.addEventListener('DOMContentLoaded', fetchWeather);