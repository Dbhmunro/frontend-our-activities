import { combineReducers } from 'redux';
import activities from './activities'
import categories from './categories'
import users from './users'
import activitiesWithCounts from './activitiesWithCounts'
import userActivities from './userActivities'

export default combineReducers({
    activities,
    categories,
    activitiesWithCounts,
    users,
    userActivities
});