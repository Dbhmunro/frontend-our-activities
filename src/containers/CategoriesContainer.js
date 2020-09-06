import React from 'react'
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import { fetchCategories } from '../actions/categories'

class CategoriesContainer extends React.Component {
    componentDidMount() {
        this.props.dispatchFetchCategories()
    }

    render() {
        return (
            <div>
                <h1>Test</h1>
                <Categories categories={this.props.categories} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchFetchCategories: (items) => dispatch(fetchCategories(items))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)