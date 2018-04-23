import filter from './filter';
import searchInput from './searchInput';
import todos from './todos';
import { combineReducers } from 'redux';

export default combineReducers({
    searchInput,
    filter,
    todos
})
