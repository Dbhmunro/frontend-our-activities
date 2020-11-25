import React from 'react'

const CategorySelector = props => {


    return (
        <div>
            <label value="">Select Category To Filter By:</label>
            <select name="category_id" onChange={props.handleOnChange} value={props.categorySelection}>
                <option value="">All Categories</option>
                {props.categories.map( (c) => {
                    return(
                        <option key={c.id} value={c.id}>{c.category_name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default CategorySelector