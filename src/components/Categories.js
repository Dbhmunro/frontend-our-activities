import React from 'react'
import { Link } from 'react-router-dom'

const Categories = props => {
    const categories = props.categories.map((category) => {
        // return <li key={category.id}>{category.category_name}</li>
        return <li key={category.id}><Link to={`/categories/${category.id}`}>{category.category_name}</Link></li>
    })
    // console.log((props.categories))

    return (
        <div>
            <h3>List of Categories</h3>
            {categories}
        </div>
    )
}

export default Categories