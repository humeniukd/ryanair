/* jshint mocha:true */
/* jshint jasmine:true */
import { getSuggestions, getRoutes, parseFlights } from './parsers';

describe('Parsers', () => {
  const airports = [
    {
      iataCode: 'AAR',
      name: 'Aarhus'
    },
    {
      iataCode: 'AGA',
      name: 'Agadir'
    },
    {
      iataCode: 'AHO',
      name: 'Alghero'
    }],
    parsedAirports = [
      {
        value: 'AHO',
        name: 'Alghero'
      }],
    routes = {
      AAR: [
        'AGA'
      ],
      AGA: [
        'AHO'
      ],
      AHO: [
        'AAR'
      ]
    },
    flights = [
      {
        dateFrom: '2015-01-17T08:15:26.981Z',
        dateTo: '2015-01-22T23:22:04.154Z',
        currency: '€',
        price: 89.33256846992299
      },
      {
        dateFrom: '2015-01-24T05:20:19.306Z',
        dateTo: '2015-01-28T07:39:57.924Z',
        currency: '€',
        price: 113.0087790186517
      },
      {
        dateFrom: '2014-12-25T03:36:40.855Z',
        dateTo: '2015-01-13T08:51:09.862Z',
        currency: '€',
        price: 14.056763156782836
      }
    ];
  let suggestParser, notSuggestParser, routesParser, noRoutesParser;

  beforeEach(() => {
    suggestParser = getSuggestions('hero');
    notSuggestParser = getSuggestions('lorem');
    routesParser = getRoutes('AGA', 'hero');
    noRoutesParser = getRoutes('AGA', 'ipsum');
  });

  describe('getSuggestions()', () => {
    it('should return matched airports', () => {
      expect(suggestParser({airports})).to.deep.equal(parsedAirports);
    });
    it('shouldn\'t match any airport', () => {
      expect(notSuggestParser({airports})).to.deep.equal([]);
    });
  });
  describe('getRoutes()', () => {
    it('should return matched airports', () => {
      expect(routesParser({airports, routes})).to.deep.equal(parsedAirports);
    });
    it('shouldn\'t return any airports', () => {
      expect(noRoutesParser({airports, routes})).to.deep.equal([]);
    });
  });
  describe('parseFlights()', () => {
    const parsedFlights = parseFlights({flights: flights.slice()});
    it('should return same number of flights', () => {
      expect(parsedFlights.length).to.equal(flights.length);
    });
    it('should return sorted flights', () => {
      expect(parsedFlights[0].price).to.equal(flights[2].price);
    });
  });
});
