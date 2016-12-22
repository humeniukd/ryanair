import { getSuggestions, getRoutes } from '../rest/parsers';
export default class HeroController {
  // @ngInject
  constructor(Rest) {
    this.Rest = Rest;
    this.startDateOptions = {
      minDate: new Date()
    };
    this.endDateOptions = {
      minDate: new Date()
    };
  }
  formatLabel(model, type) {
    return this[type] && this[type].find((option) => {
      return model === option.value;
    }).name;
  }
  toggleDatepicker(type) {
    const propName = `${type}DatePickerIsOpened`;
    this[propName] = !this[propName];
  }
  getSources(val) {
    return this.Rest.getAirports()
      .then(resp => this.sources = getSuggestions(val)(resp.data));
  }
  getDestinations(val) {
    return this.Rest.getAirports()
      .then(resp => this.destinations = getRoutes(this.source, val)(resp.data));
  }
  submit() {
    const {startDate, endDate, source, destination} = this;
    if(this.form.$valid) {
      this.criteria = {startDate, endDate, source, destination};
    }
  }
  startDateChange(){
    this.endDateOptions.minDate = this.startDate;
  }
  endDateChange(){
    this.startDateOptions.maxDate = this.endDate;
  }
}
