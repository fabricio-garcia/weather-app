export default class Weather {
  constructor(city, countryCode) {
    this.apiKey = 'fc90a33d5572be994fe2d75730811e33';
    this.city = city;
    this.countryCode = countryCode;
  }

  async getWeatherCelsius() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(URI);
    const data = response.json();
    return data;
  }

  async getWeatherFahrenheit() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=imperial`;
    const response = await fetch(URI);
    const data = response.json();
    return data;
  }

  searchLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}