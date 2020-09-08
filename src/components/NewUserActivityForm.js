import React from 'react'
import { connect } from 'react-redux'
import { fetchNewUserActivity } from '../actions/userActivities'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

class NewUserActivityForm extends React.Component {
    state = {
        user_id: this.props.user.id,
        activity_id: "",
        start_date: "",
        end_date: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.state.activity_id = parseInt(this.state.activity_id)
        // console.log(this.state)
        this.props.dispatchFetchNewUserActivity(this.state)
        this.setState({
            user_id: this.props.user.id,
            activity_id: "",
            start_date: this.today(),
            end_date: this.today()
        })
    }

    today = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        return(today)
    }
    
    render() {

        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="activity_id">Choose an Activity:</label>
                <select required name="activity_id" onChange={this.handleChange} >
                    <option value="" selected disabled hidden>Choose Activity Here</option>
                    {this.props.activities.map( (a) => {
                        return(
                            <option key={a.id} value={a.id}>{a.activity_name}</option>
                        )
                    })}
                </select>

                <label htmlFor="start_date">Start date:</label>
                <input required type="date" id="start" name="start_date"
                    value={this.state.start_date}
                    max={this.today()} onChange={this.handleChange}></input>

                <label htmlFor="end_date">End date:</label>
                <input required type="date" id="end" name="end_date"
                    value={this.state.end_date}
                    min={this.state.start_date} onChange={this.handleChange}></input>

                <input type="submit" value="Save Activity" />
                {/* <p>{this.state.errors}</p> */}
            </form>
            </>
        )
    }
}

const mSTP = (state) => {
    return {
        user: state.users,
        activities: state.activities
    }
}

const mDTP = (dispatch) => {
    return {
        dispatchFetchNewUserActivity: (items) => dispatch(fetchNewUserActivity(items))
    }
}

export default connect(mSTP, mDTP)(NewUserActivityForm)