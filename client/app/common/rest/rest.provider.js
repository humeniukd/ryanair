export default function() {
  const config = { baseUrl: '', flightsUrl: '', airportsUrl: '', dateFormat: 'medium' };
  let airports;
  this.setConfig = (urls) => {
    Object.assign(config, urls);
  };
  this.$get = ['$http', '$log', '$filter', ($http, $log, $filter) => {
    const getWithHttp = (...args) => {
      return $http.get(...args)
        .catch(e => $log.debug('$http error:', e));
    },
    formatDate = (date) => {
      return $filter('date')(date, config.dateFormat);
    };
    return {
      getAirports: () => {
        return airports ? Promise.resolve(airports) : airports = getWithHttp(`${config.baseUrl}${config.airportsUrl}`);
      },
      getFlights: (options = {}) => {
        const {source, destination, startDate, endDate, limit=10, offset=0} = options;
        return getWithHttp(
          `${config.baseUrl}${config.flightsUrl}${source}/to/${destination}\
/${formatDate(startDate)}/${formatDate(endDate)}/250/unique/?limit=${limit}&offset=${offset}`
        );
      }
    };
  }];
}
