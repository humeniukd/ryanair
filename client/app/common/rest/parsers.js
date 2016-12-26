const getSuggestions = (val) => {
  return (data) => {
    const airports = data.airports,
      regex = new RegExp(val, 'i');
    return Array.isArray(airports) && airports.reduce((result, item) => {
        const {name, iataCode} = item;
        regex.test(name) && result.push({name, value: iataCode});
        return result;
      }, []);
  };
};

const getRoutes = (source, val) => {
  return (data) => {
    const {routes, airports} = data,
      codes = routes[source],
      regex = new RegExp(val, 'i');
    return Array.isArray(airports) && Array.isArray(codes) && airports.reduce((result, item) => {
        const {name, iataCode} = item;
        codes.includes(iataCode) && regex.test(name) && result.push({name, value: iataCode});
        return result;
      }, []);
  };
};

const parseFlights = (data) => {
    const { flights } = data;
    return Array.isArray(flights) && flights.sort((a, b) => {
      return parseFloat(a.price) - parseFloat(b.price);
    });
  };
export { getSuggestions, getRoutes, parseFlights };
