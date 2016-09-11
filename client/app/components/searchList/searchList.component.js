import template from './searchList.html';
import controller from './searchList.controller';
import style from './searchList.scss';
let searchListComponent = {
  restrict: 'E',
  bindings: {
    searchMessages:'<',
    searchText:'<'
  },
  template,
  controller
};

export default searchListComponent;
