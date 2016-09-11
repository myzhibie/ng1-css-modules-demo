import CtrlsModule from './ctrls'
import CtrlsController from './ctrls.controller';
import CtrlsComponent from './ctrls.component';
import CtrlsTemplate from './ctrls.html';

describe('Ctrls', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CtrlsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CtrlsController();
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
      expect(CtrlsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CtrlsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CtrlsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CtrlsController);
      });
  });
});
