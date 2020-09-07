import React from 'react'
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import { fetchCategories } from '../actions/categories'
import { logoutUser } from '../actions/users'

class CategoriesContainer extends React.Component {
    componentDidMount() {
        this.props.dispatchFetchCategories()
    }

    handleClick = () => {
        this.props.dispatchLogoutUser()
    }

    render() {
        return (
            <div>
                <Categories categories={this.props.categories} />
                <button onClick={this.handleClick}>Log ME Out!!!</button>
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
        dispatchFetchCategories: (items) => dispatch(fetchCategories(items)),
        dispatchLogoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)