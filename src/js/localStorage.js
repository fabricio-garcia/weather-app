export default class LocalStorage {
  constructor() {
    this.defaultCity = 'Mexico City';
    this.defaultCountry = 'mx';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if (localStorage.getItem('countryCode') === null) {
      this.countryCode = this.defaultCity;
    } else {
      this.countryCode = localStorage.getItem('countryCode');
    }

    return {
      city: this.city,
      countryCode: this.countryCode,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  setLocationData(city, countryCode) {
    localStorage.setItem('city', city);
    localStorage.setItem('countryCode', countryCode);
  }
}