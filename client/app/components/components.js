import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Search from './searchBody/searchBody';
import SearchField from './searchField/searchField';
import SearchList from './searchList/searchList';
import Attrs from './attrs/attrs';
import Ctrls from './ctrls/ctrls';
import showAction from './showAction/showAction';
let componentModule = angular.module('app.components', [
  Home,
  About,
  Search,
  SearchField,
  SearchList,
  Attrs,
  Ctrls,
  showAction
])
  
.name;

export default componentModule;
