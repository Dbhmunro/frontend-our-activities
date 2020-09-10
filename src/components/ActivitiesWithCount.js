import React from 'react'

const ActivitiesWithCount = props => {
    let activities = props.activities.sort((a, b) => (a.count > b.count) ? -1 : 1)
    activities = activities.map((activity) => {
        return <li key={activity.id}>{activity.activity_name} - Count: {activity.used_count}</li>
    })
    // console.log((props.activities))

    return (
        <div>
            <h3>Top Current Activities</h3>
            {activities}
        </div>
    )
}

export default ActivitiesWithCount