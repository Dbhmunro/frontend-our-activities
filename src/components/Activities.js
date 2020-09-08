import React from 'react'

const Activities = props => {
    const activities = props.userActivities.map((a) => {
        return <li key={a.id}>Category: {a.activity.category.category_name} - {a.activity.activity_name} - Start Date: {a.start_date.slice(0,10)} - End Date:{a.end_date.slice(0,10)} </li>
    })
    // can use moment library to make date look nicer

    return (
        <div>
            <h3>Your Activities</h3>
            {activities}
        </div>
    )
}

export default Activities