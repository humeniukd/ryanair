export default function() {
  const config = {baseUrl: ''};
  this.setBaseUrl = (url) => {
    config.baseUrl = url;
  };
  this.$get = ['$http', ($http) => {
    return {
      getWithHttp: (url, options = {}) => {
        return $http.get(`${config.baseUrl}${url}`, options);
      }
    };
  }];
}
