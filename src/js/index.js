import Weather from './weather';
import Dom from './dom';
import LocalStorage from './localStorage';

require('../css/style.css');

const dom = new Dom();
const localStorage = new LocalStorage();
const { city, countryCode } = localStorage.getLocationData();
const weather = new Weather(city, countryCode);
const temperatureConverterBtn = document.getElementById('temperature-converter');

const fetchWeatherCelsius = async () => {
  const data = await weather.getWeatherCelsius();
  dom.renderCelsius(data);
};

const fetchWeatherFahrenheit = async () => {
  const data = await weather.getWeatherFahrenheit();
  dom.renderFahrenheit(data);
};

document.getElementById('search-location').addEventListener('click', (evt) => {
  evt.preventDefault();
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('country-code').value;
  weather.searchLocation(city, countryCode);
  localStorage.setLocationData(city, countryCode);
  fetchWeatherCelsius();
});

const switchUnits = (evt) => {
  evt.preventDefault();
  fetchWeatherFahrenheit();
  temperatureConverterBtn.style.display = 'none';
};

temperatureConverterBtn.addEventListener('click', switchUnits);
document.addEventListener('DOMContentLoaded', fetchWeatherCelsius);
