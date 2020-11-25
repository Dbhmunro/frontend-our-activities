import React from 'react'
import { connect } from 'react-redux'
import ActivitiesWithCount from '../components/ActivitiesWithCount'
import { fetchActivitiesWithCounts } from '../actions/activitiesWithCounts'
import CategorySelector from '../components/CategorySelector'
import NewUserActivityForm from '../components/NewUserActivityForm'



class TopActivitiesContainer extends React.Component {

    state = {
        categorySelection: ""
    }

    componentDidMount() {
        this.props.dispatchFetchActivitiesWithCounts()
    }

    handleChange = (e) => {
        this.setState({
            categorySelection: e.target.value
        })
    }

    activitiesFilter = () => {
        if (this.state.categorySelection !== ""){
            return this.props.activities.filter( a => a.category_id == this.state.categorySelection )
        } else {
            return this.props.activities
        }
    }

    render() {
        return (
            <div>
                <CategorySelector categories={this.props.categories} handleOnChange={this.handleChange} />
                <ActivitiesWithCount activities={this.activitiesFilter()} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activities: state.activitiesWithCounts,
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchFetchActivitiesWithCounts: (items) => dispatch(fetchActivitiesWithCounts(items))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopActivitiesContainer)