
import { DO_SEARCH, DO_SELECT,DO_RESET} from './dosearchActions';

const messages = [
    { key: "erer", val: "ererererererere" },
    { key: "1111", val: "111111111111111" },
    { key: "2222", val: "222222222222222" },
    { key: "3333", val: "333333333333333" },
    { key: "4444", val: "444444444444444" },
    { key: "5555", val: "555555555555555" },
    { key: "6666", val: "666666666666666" },
    { key: "7777", val: "777777777777777" },
    { key: "8888", val: "888888888888888" }
];

function doSearch(state = { messages, selected: '' }, action) {
    if (!action || !action.type) {
        return state;
    }
    switch (action.type) {
        case DO_SEARCH:
            let newMes = state.messages.filter((item) => {
                return item.key.indexOf(action.payload.searchText) !== -1;
            });
            return Object.assign({}, { 
              messages: newMes, 
              actionType:{action:'search',data:action.payload.searchText}
            });
        case DO_SELECT:
            return Object.assign({}, {
             messages: state.messages, 
             actionType:{action:'selected',data:action.payload.selected}
           });
        case DO_RESET:
          return Object.assign({},{
            messages:angular.copy(messages),
            actionType:{action:'reset',data:action.payload.target}
          });
        default:
            return state;
    }
}

export default doSearch;
