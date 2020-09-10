import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, ListGroup } from 'react-bootstrap'

const CategoryActivities = (props) => {
    let { categoryId } = useParams();

    let activities = props.activities.filter((a) => a.category_id === parseInt(categoryId)).sort((a, b) => (a.count > b.count) ? -1 : 1)
    activities = activities.map((activity) => {
        return <ListGroup.Item key={activity.id}>{activity.activity_name} - Count: {activity.used_count}</ListGroup.Item>
    })
    // console.log((props.activities))

    const hasActivities = () => {
        if (activities.length === 0) {
            return(
                <Card style={{ width: '15rem' }} bg={'light'} >
                    <Card.Header>Top Current Activities by Category</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>No Top Activities</ListGroup.Item>
                    </ListGroup>
                </Card>
            )
        } else {
            return(
                <>
                <Card style={{ width: '15rem' }} bg={'light'} >
                    <Card.Header>Top Current Activities by Category</Card.Header>
                    <ListGroup variant="flush">
                        {activities}
                    </ListGroup>
                </Card>
                </>
            )
        }
    }

    return (
        <div>
            
            {hasActivities()}
        </div>
    )
}

export default CategoryActivities