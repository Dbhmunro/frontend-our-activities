import React from 'react'

const Activities = props => {
    const activities = props.activities.map((activity) => {
        return <li key={activity.id}>{activity.activity_name}</li>
    })
    // console.log((props.activities))

    return (
        <div>
            <h3>List of Current Activities</h3>
            {activities}
        </div>
    )
}

export default Activities