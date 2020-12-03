import React from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroup } from 'react-bootstrap'

const Categories = props => {
    const categories = props.categories.map((category) => {
        return <ListGroup.Item key={category.id}><Link to={`/categories/${category.id}`}>{category.category_name}</Link></ListGroup.Item>
    })

    return (
        <div>
            <Card style={{ width: '15rem' }} bg={'light'} >
                <Card.Header>List of Categories</Card.Header>
                <ListGroup variant="flush">
                    {categories}
                </ListGroup>
            </Card>
        </div>
    )
}

export default Categories