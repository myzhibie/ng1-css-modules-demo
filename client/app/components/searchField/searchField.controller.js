import * as doSearchActions from '../searchBody/dosearchActions';
class SearchFieldController {
    constructor($ngRedux, $scope) {
        'ngInject';
        let disconnect = $ngRedux.connect(
            null,
            doSearchActions
        )(this);
        $scope.$on('$destroy', disconnect);
    }

}

export default SearchFieldController;
