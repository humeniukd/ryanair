/* jshint mocha:true */
/* jshint jasmine:true */
/* global inject */
import './';

describe('Rest', () => {
  const model = {id: 1, user: 'Paul', amount: 3.1416};
  let $httpBackend, Rest;
  beforeEach(angular.mock.module('rest'));

  beforeEach(inject(($injector) => {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('/someurl').respond(model);
    Rest = $injector.get('Rest');
  }));

  describe('getWithHttp', () => {
    it('getWithHttp() should return an item', () => {
      Rest.getWithHttp('/someurl').then((resp) => {
        expect(resp.data).to.deep.equal(model);
      });

      $httpBackend.flush();
    });
  });
});
