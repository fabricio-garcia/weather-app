export default class Dom {
  constructor() {
    this.location = document.getElementById('weather-location');
    this.description = document.getElementById('weather-description');
    this.string = document.getElementById('weather-string');
    this.humidity = document.getElementById('weather-humidity');
    this.wind = document.getElementById('weather-wind');
  }

  render(weather) {
    this.location.textContent = `${weather.name} / ${weather.sys.country}`;
    this.description.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} °C`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}°C`;
    this.wind.textContent = `Weather ${weather.wind.speed} m/s`;
  }
}