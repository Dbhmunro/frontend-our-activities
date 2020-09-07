const GET_ACTIVITIES_WITH_COUNTS = 'GET_ACTIVITIES_WITH_COUNTS'

export function fetchActivitiesWithCounts() {
    return (dispatch) => {
        fetch('http://localhost:3000/activity_users')
        .then(response => response.json())
        // .then(obj => {
        //     console.log(obj)
        //     return obj
        // })
        .then(activities => dispatch({ type: GET_ACTIVITIES_WITH_COUNTS, activities: activities }));
    };
}