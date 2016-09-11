import template from './searchField.html';
import controller from './searchField.controller';

let searchFieldComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  require:{
    searchBody:'^searchBody'
  }
};

export default searchFieldComponent;
