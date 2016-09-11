class ShowActionController {
  constructor($ngRedux,$scope) {
    'ngInject';
    function mapStateToParams(state){
      return {
        actionType:state.doSearch.actionType
      };
    }
    let disconnect=$ngRedux.connect(
        mapStateToParams
      )(this);
    $scope.$on('$destroy',disconnect); 
  }

}

export default ShowActionController;
