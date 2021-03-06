export default function userActivities(state = [], action) {
    switch (action.type) {
        case 'GET_USER_ACTIVITIES':
            return (
                action.activities
            )

        case 'ADD_USER_ACTIVITY':
            return [
                ...state, action.userActivity
            ]

        default:
            return state;
    }
  };