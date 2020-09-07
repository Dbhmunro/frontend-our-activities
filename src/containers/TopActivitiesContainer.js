import React from 'react'
import { connect } from 'react-redux'
import ActivitiesWithCount from '../components/ActivitiesWithCount'
import { fetchActivitiesWithCounts } from '../actions/activitiesWithCounts'



class TopActivitiesContainer extends React.Component {
    componentDidMount() {
        this.props.dispatchFetchActivitiesWithCounts()
    }

    render() {
        return (
            <div>
                <ActivitiesWithCount activities={this.props.activities} />
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