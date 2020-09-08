import React from 'react'
import { connect } from 'react-redux'
import Activities from '../components/Activities'
import NewUserActivityForm from '../components/NewUserActivityForm'
import { fetchUserActivities } from '../actions/userActivities'



class UserActivitiesContainer extends React.Component {
    componentDidMount() {
        this.props.dispatchFetchUserActivities(this.props.user.id)
    }

    render() {
        return (
            <div>
                <NewUserActivityForm />
                <Activities userActivities={this.props.userActivities} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.users,
        userActivities: state.userActivities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchFetchUserActivities: (items) => dispatch(fetchUserActivities(items))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActivitiesContainer)