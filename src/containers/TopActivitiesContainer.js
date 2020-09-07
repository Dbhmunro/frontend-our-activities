import React from 'react'
import { connect } from 'react-redux'
import Activities from '../components/Activities'
import { fetchActivitiesWithCounts } from '../actions/activities_with_counts'



class TopActivitiesContainer extends React.Component {
    componentDidMount() {
        this.props.dispatchFetchActivitiesWithCounts()
    }

    render() {
        return (
            <div>
                <Activities activities={this.props.activities} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activities: state.activitiesWithCounts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchFetchActivitiesWithCounts: (items) => dispatch(fetchActivitiesWithCounts(items))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopActivitiesContainer)