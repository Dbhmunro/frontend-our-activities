import { combineReducers } from 'redux';
import activities from './activities'
import categories from './categories'
import users from './users'

export default combineReducers({
    activities,
    categories
});