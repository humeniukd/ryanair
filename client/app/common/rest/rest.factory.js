// @ngInject
let UserFactory = function ($http) {
  const baseUrl = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/';

  let getWithHttp = (url, cb) => {
    return $http.get(`${baseUrl}${url}`).then(cb);
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  return { getWithHttp, isSignedIn };
};

export default UserFactory;
