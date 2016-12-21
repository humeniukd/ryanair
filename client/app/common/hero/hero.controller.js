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
  getSources(val) {
    return this.Rest.getAirports()
      .then(resp => getSuggestions(val)(resp.data));
  }
  getDestinations(val) {
    return this.Rest.getAirports()
      .then(resp => getRoutes(this.source, val)(resp.data));
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
