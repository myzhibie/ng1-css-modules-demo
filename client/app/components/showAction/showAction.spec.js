import ShowActionModule from './showAction'
import ShowActionController from './showAction.controller';
import ShowActionComponent from './showAction.component';
import ShowActionTemplate from './showAction.html';

describe('ShowAction', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ShowActionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ShowActionController();
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
      expect(ShowActionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ShowActionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ShowActionTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ShowActionController);
      });
  });
});
