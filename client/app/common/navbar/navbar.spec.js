/* jshint mocha:true */
/* jshint jasmine:true */
/* global inject */
import NavbarModule from './';

describe('Navbar', () => {
  let $rootScope, $state, $compile;

  beforeEach(window.module(NavbarModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $compile = $injector.get('$compile');
  }));


  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<navbar></navbar>')(scope);
      scope.$apply();
    });

    it('has name in template', () => {
      expect(template.find('a').html()).to.eq('Flights are simple');
    });

  });
});
