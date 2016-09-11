class SearchListController {
    constructor() {
        this.name = 'searchList';
    }
    $onInit() {
        this.initialMessages = angular.copy(this.searchMessages);
    }
    $onChanges(changesObj) {
        if (changesObj.searchText && changesObj.searchText.currentValue) {
            this.searchMessages = this.initialMessages.filter((message) => {
                return message.key.indexOf(this.searchText) !== -1;
            })
        }
    }


}

export default SearchListController;
