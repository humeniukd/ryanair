/* jshint mocha:true */
/* jshint jasmine:true */
/* global inject */
import FooterModule from './';

describe('Footer', () => {
  let $rootScope, $compile;

  beforeEach(window.module(FooterModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $compile = $injector.get('$compile');
  }));

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<foot></foot>')(scope);
      scope.$apply();
    });

    it('has name in template', () => {
      expect(template.html()).to.contains('footer');
    });

  });
});
