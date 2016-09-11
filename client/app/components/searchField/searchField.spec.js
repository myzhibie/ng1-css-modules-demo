import SearchFieldModule from './searchField'
import SearchFieldController from './searchField.controller';
import SearchFieldComponent from './searchField.component';
import SearchFieldTemplate from './searchField.html';

describe('SearchField', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SearchFieldModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SearchFieldController();
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
      expect(SearchFieldTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SearchFieldComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SearchFieldTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SearchFieldController);
      });
  });
});
