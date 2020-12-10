const GET_USER_ACTIVITIES = 'GET_USER_ACTIVITIES'
const ADD_USER_ACTIVITY = 'ADD_USER_ACTIVITY'

export function fetchUserActivities(userId) { //needs to work off of token?
    return (dispatch) => {
        fetch(`http://localhost:3000/users/${userId}/activity_users`)
        .then(response => response.json())
        // .then(obj => {
        //     console.log(obj)
        //     return obj
        // })
        .then(userActivities => dispatch({ type: GET_USER_ACTIVITIES, activities: userActivities }));
    };
}

export const fetchNewUserActivity = ({ activity_id, start_date, end_date, user_id }) => { //needs to work off of token? 
    return (dispatch) => {
        fetch('http://localhost:3000/activity_users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                activity_users: {
                    activity_id,
                    user_id,
                    start_date,
                    end_date
                }
            })
        })
        .then(response => response.json())
        .then(userActivity => {
            if (userActivity.message) {
                dispatch({ type: ERROR_MESSAGE, message: userActivity.message})
            } else {
                dispatch({ type: ADD_USER_ACTIVITY, userActivity: userActivity })
            }
        })
    };
}