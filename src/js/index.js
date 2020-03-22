import Weather from './weather';
import Dom from './dom';

require('../css/style.css');

const dom = new Dom();
const weather = new Weather('London', 'uk');

async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  dom.render(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather);