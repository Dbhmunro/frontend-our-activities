import React from 'react'
import { connect } from 'react-redux'
import { fetchNewUserActivity } from '../actions/userActivities'
import { fetchNewActivity } from '../actions/activities'

import Button from 'react-bootstrap'

class NewUserActivityForm extends React.Component {
    state = {
        user_id: this.props.user.id,
        activity_id: "",
        // these next two lines call the current date in the date selector format (wtf is this ugly thing?!?)
        start_date: new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + String(new Date().getDate()).padStart(2, '0'),
        end_date: new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + String(new Date().getDate()).padStart(2, '0'),
        activity_name: "",
        category_id: "",
        outdoor: false
    }
    
    resetState = () => {
        this.setState({
            user_id: this.props.user.id,
            activity_id: "",
            start_date: this.today(),
            end_date: this.today(),
            activity_name: "",
            category_id: "",
            outdoor: false
        })
    }

    handleChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit = e => {
        e.preventDefault()
        // console.log(this.state)
        if (this.state.activity_id === "-1") {
            if (this.props.activities.map(a => a.activity_name).includes(this.state.activity_name)) {
                this.setState({
                    ...this.state,
                    error: "New activity name must be unique."
                })
            } else {
                // console.log(this.state)
                this.props.dispatchFetchNewActivity(this.state)
                this.resetState()
            }
        } else {
            // console.log(this.state)
            this.state.activity_id = parseInt(this.state.activity_id)
            this.props.dispatchFetchNewUserActivity(this.state)
            this.resetState()
        }
    }

    onActivityAssign = () => {
        if (this.state.activity_id !== "-1") {
            return (
                <>
                <label htmlFor="start_date">Start date:</label>
                <input required type="date" id="start" name="start_date"
                    value={this.state.start_date}
                    max={this.today()} onChange={this.handleChange}></input>

                <label htmlFor="end_date">End date:</label>
                <input required type="date" id="end" name="end_date"
                    value={this.state.end_date}
                    min={this.state.start_date} onChange={this.handleChange}></input>

                <input type="submit" value="Save Activity" />
                </>
            )
        }
    }

    onActivityCreate = () => {
        if (this.state.activity_id === "-1") {
            return (
                <>
                <label htmlFor="activity_name">Activity Name:</label>
                <input required type="text" name="activity_name" value={this.state.activity_name} onChange={this.handleChange}></input>
                <label htmlFor="category_id">Choose a Category:</label>
                <select required name="category_id" onChange={this.handleChange} value={this.state.category_id}>
                    <option value="">Choose Category Here</option>
                    {this.props.categories.map( (c) => {
                        return(
                            <option key={c.id} value={c.id}>{c.category_name}</option>
                        )
                    })}
                </select>
                <label htmlFor="outdoor">Outdoors?</label>
                <input type="checkbox" name="outdoor" checked={this.state.outdoor} onChange={this.handleChange}></input>

                <input type="submit" value="Create Activity" />
                </>
            )
        }
    }

    today = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        return(today)
    }
    
    render() {

        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="activity_id">Choose an Activity:</label>
                <select required name="activity_id" onChange={this.handleChange} value={this.state.activity_id} >
                    <option value="">Choose Activity Here</option>
                    <option value="-1">Create New Activity</option>
                    {this.props.activities.map( (a) => {
                        return(
                            <option key={a.id} value={a.id}>{a.activity_name}</option>
                        )
                    })}
                </select>

                {this.onActivityCreate()}
                {this.onActivityAssign()}
                
                <p>{this.state.error}</p>
            </form>
            </>
        )
    }
}

const mSTP = (state) => {
    return {
        user: state.users,
        activities: state.activities,
        categories: state.categories
    }
}

const mDTP = (dispatch) => {
    return {
        dispatchFetchNewUserActivity: (items) => dispatch(fetchNewUserActivity(items)),
        dispatchFetchNewActivity: (items) => dispatch(fetchNewActivity(items))
    }
}

export default connect(mSTP, mDTP)(NewUserActivityForm)

// additional thoughts: when implementing with many users, may need to have activity fetch take place on this page
// and the name uniqueness should be validated in the api instead of here