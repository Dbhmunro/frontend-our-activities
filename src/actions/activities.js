const ADD_ACTIVITY = 'ADD_ACTIVITY'
const GET_ACTIVITIES = 'GET_ACTIVITIES'

export const fetchNewActivity = ({ activity_name, category_id, outdoor, activity_id, start_date, end_date, user_id }) => {
    return (dispatch) => {
        fetch('http://localhost:3000/activities/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                activity: {
                    activity_name,
                    category_id,
                    outdoor
                }
            })
        })
        .then(response => response.json())
        .then(activity => dispatch({ type: ADD_ACTIVITY, activity }));
    }
};

export function fetchActivities() {
    return (dispatch) => {
        // dispatch({ type: 'START_ADDING_ACTIVITIES_REQUEST' });
        fetch('http://localhost:3000/activities')
        .then(response => response.json())
        // .then(obj => {
        //     console.log(obj)
        //     return obj
        // })
        .then(activities => dispatch({ type: GET_ACTIVITIES, activities: activities }));
    };
}