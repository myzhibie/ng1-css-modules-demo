


class SearchBodyController {
  constructor($ngRedux,$scope) {
    'ngInject';
    this.searchTitle = 'searchBody';
    function mapStateToParams(state){
      return {
        messages:state.doSearch.messages
      };
    }
    let disconnect=$ngRedux.connect(
        mapStateToParams
      )(this);
    $scope.$on('$destroy',disconnect);  

  }
  $onInit(){
    console.log(this);
  }

  doSearch(text){
    this.searchText=text;
  }
}

export default SearchBodyController;
