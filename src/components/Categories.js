import React from 'react'

const Categories = props => {
    const categories = props.categories.map((category) => {
        return <li key={category.id}>{category.category_name}</li>
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