import appCss from './app.scss';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
// import 'bootstrap.min.css';
import reducers from './app.reducers';
import createLogger from 'redux-logger';
import ngRedux from 'ng-redux';

const logger = createLogger({
    level: 'info',
    collapsed: true
});
angular.module('app', [
        uiRouter,
        Common,
        Components,
        ngRedux
    ])
    .config(($locationProvider, $ngReduxProvider) => {
        "ngInject";
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
        $ngReduxProvider.createStoreWith(reducers, [logger]);
    })

.component('app', AppComponent);
