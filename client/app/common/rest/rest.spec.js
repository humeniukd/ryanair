/* jshint mocha:true */
/* jshint jasmine:true */
/* global inject */
import Rest from './';

describe('Rest', () => {
  const model = {id: 1, user: 'Paul', amount: 3.1416};
  let $httpBackend, rest;
  beforeEach(angular.mock.module(Rest));

  beforeEach(inject(($injector) => {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('').respond(model);
    rest = $injector.get('Rest');
  }));

  describe('getAirports', () => {
    it('getAirports() should return an item', () => {
      rest.getAirports().then((resp) => {
        expect(resp.data).to.deep.equal(model);
      });

      $httpBackend.flush();
    });
  });
});
