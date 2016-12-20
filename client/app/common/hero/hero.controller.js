const getSuggestions = (val) => {
  return (data) => {
    const airports = data.airports,
      regex = new RegExp(val, 'i'),
      result = [];
    Array.isArray(airports) && airports.forEach((item) => {
      const {name, iataCode} = item;
      regex.test(name) && result.push({name, value: iataCode});
    });
    return result;
  };
};

const getRoutes = (source, val) => {
  return (data) => {
    const {routes, airports} = data,
      codes = routes[source],
      regex = new RegExp(val, 'i'),
      result = [];
    Array.isArray(airports) && Array.isArray(codes) && airports.forEach((item) => {
      const {name, iataCode} = item;
      codes.includes(iataCode) && regex.test(name) && result.push({name, value: iataCode});
    });
    return result;
  };
};

class HeroController {
  // @ngInject
  constructor(Rest) {
    this.Rest = Rest;
    this.source = '';
    this.destination = '';
    this.startDate = new Date();
    this.endDate = new Date();
    this.startDatePickerIsOpened = false;
    this.endDatePickerIsOpened = false;
    this.datePickerOptions = {
      minDate: new Date(),
      startingDay: 1
    };
  }
  getLocations(val) {
    return this.Rest.getWithHttp('forms/flight-booking-selector', {cache: true})
      .then(resp => getSuggestions(val)(resp.data));
  }
  getDestinations(val) {
    return this.Rest.getWithHttp('forms/flight-booking-selector', {cache: true})
      .then(resp => getRoutes(this.source, val)(resp.data));
  }
  submit() {
    console.log(this.form);
  }
}

export default HeroController;
