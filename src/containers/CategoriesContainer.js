import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Categories from '../components/Categories'
import CategoryActivities from '../components/CategoryActivities'

class CategoriesContainer extends React.Component {

    render() {
        return (
            <div>
                <Categories categories={this.props.categories} />
                <Switch>
                    <Route path={`/categories/:categoryId`}>
                        <CategoryActivities activities={this.props.activities}/>
                    </Route>
                    <Route path="/categories">
                        <>
                            <h3>Top Current Activities by Category</h3>
                            <h4>Please select a category.</h4>
                        </>
                    </Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        activities: state.activitiesWithCounts
    }
}


export default connect(mapStateToProps)(CategoriesContainer)