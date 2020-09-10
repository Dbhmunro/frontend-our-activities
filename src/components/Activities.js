import React from 'react'
import { ListGroup, Card } from 'react-bootstrap'

const Activities = props => {
    const activities = props.userActivities.map((a) => {
        return (
            <ListGroup.Item key={a.id}>Category: {a.activity.category.category_name} --- {a.activity.activity_name}
            <br />
            Start Date: {a.start_date.slice(0,10)} - End Date:{a.end_date.slice(0,10)} </ListGroup.Item>
        )
    })
    // can use moment library to make date look nicer

    return (
        <div>
            <Card style={{ width: '40rem' }} className="text-center" bg={'light'} >
                <Card.Header  >Your Activities</Card.Header>
                <ListGroup variant="flush">
                    {activities}
                </ListGroup>
            </Card>
        </div>
    )
}

export default Activities