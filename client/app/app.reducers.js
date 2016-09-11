import { combineReducers } from 'redux';

import doSearch from './components/searchBody/reducers';

const searchReducer = combineReducers({
    doSearch
});

export default searchReducer;