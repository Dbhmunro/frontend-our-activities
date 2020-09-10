import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryActivities = (props) => {
    let { categoryId } = useParams();

    let activities = props.activities.filter((a) => a.category_id === parseInt(categoryId)).sort((a, b) => (a.count > b.count) ? -1 : 1)
    activities = activities.map((activity) => {
        return <li key={activity.id}>{activity.activity_name} - Count: {activity.used_count}</li>
    })
    // console.log((props.activities))

    const hasActivities = () => {
        if (activities.length === 0) {
            return(
                <h4>No Top Activities</h4>
            )
        } else {
            return(
                <>
                {activities}
                </>
            )
        }
    }

    return (
        <div>
            <h3>Top Current Activities by Category</h3>
            {hasActivities()}
        </div>
    )
}

export default CategoryActivities