import { parseFlights } from '../rest/parsers';
export default class ListController {
  // @ngInject
  constructor(Rest) {
    this.Rest = Rest;
  }
  $onChanges() {
    if (this.criteria) {
      const {source, destination, startDate, endDate} = this.criteria;
      this.Rest.getFlights({source, destination, startDate, endDate})
        .then(resp => this.items = parseFlights(resp.data));
    }
  }
}
