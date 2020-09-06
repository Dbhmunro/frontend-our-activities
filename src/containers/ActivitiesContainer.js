import React from 'react'
import { connect } from 'react-redux'
import Activities from '../components/Activities'
import { fetchActivities } from '../actions/activities'



class ActivitiesContainer extends React.Component {
    componentDidMount() {
        this.props.dispatchFetchActivities()
    }

    render() {
        return (
            <div>
                <h1>Test</h1>
                <Activities activities={this.props.activities} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activities: state.activities
    }
}

const mapDispatchToProps = dispatch => {
    return {
      dispatchFetchActivities: (items) => dispatch(fetchActivities(items))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer)