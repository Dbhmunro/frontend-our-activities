import { combineReducers } from 'redux';
import activities from './activities'
import categories from './categories'
import users from './users'
import activitiesWithCounts from './activities_with_counts'

export default combineReducers({
    activities,
    categories,
    activitiesWithCounts,
    users
});