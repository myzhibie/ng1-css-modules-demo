import AttrsModule from './attrs'
import AttrsController from './attrs.controller';
import AttrsComponent from './attrs.component';
import AttrsTemplate from './attrs.html';

describe('Attrs', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AttrsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AttrsController();
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
      expect(AttrsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AttrsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AttrsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AttrsController);
      });
  });
});
