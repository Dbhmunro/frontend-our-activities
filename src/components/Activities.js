import React from 'react'

const Activities = props => {
    const activities = props.activities.map((activity) => {
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

export default Activities