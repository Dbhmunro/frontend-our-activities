const GET_USER_ACTIVITIES = 'GET_USER_ACTIVITIES'

export function fetchUserActivities(userId) {
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