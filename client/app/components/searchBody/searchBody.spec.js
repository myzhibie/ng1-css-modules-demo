import SearchBodyModule from './searchBody'
import SearchBodyController from './searchBody.controller';
import SearchBodyComponent from './searchBody.component';
import SearchBodyTemplate from './searchBody.html';

describe('SearchBody', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SearchBodyModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SearchBodyController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(SearchBodyTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SearchBodyComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SearchBodyTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SearchBodyController);
      });
  });
});
