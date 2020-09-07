import React from 'react'
import { connect } from 'react-redux'
import { fetchUserSignup } from '../actions/users'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

class UserSignupForm extends React.Component {
    state = {
        username: "",
        email: "",
        password: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.dispatchFetchUserSignup(this.state)
        this.setState({
            username: "",
            email: "",
            password: ""
        })
    }

    errorMessage = () => {
        if(this.props.message) {
            return this.props.message
        }
    }
    
    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="Enter a username" value={this.state.username} onChange={this.handleChange} />
                <input type="text" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                <input type="password" name="password" placeholder="Enter a password" value={this.state.password} onChange={this.handleChange} />
                <input type="submit" value="Signup" />
                <p>{this.errorMessage()}</p>
            </form>
            <h4>Already have an account, login <Link to="/login">here</Link></h4>
            </>
        )
    }
}

const mSTP = (state) => {
    if (state.users.message) {
        return {
            message: state.users.message
        }
    } else {
        return {
            message: ""
        }
    }
}

const mDTP = (dispatch) => {
    return {
        dispatchFetchUserSignup: (items) => dispatch(fetchUserSignup(items))
    }
}

export default connect(mSTP, mDTP)(UserSignupForm)