import React from 'react'
import { connect } from 'react-redux'
import { fetchUserLogin } from '../actions/users'

class UserLoginForm extends React.Component {
    state = {
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
        this.props.dispatchFetchUserLogin(this.state)
        this.setState({
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
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="email" placeholder="Enter to your email" value={this.state.email} onChange={this.handleChange} />
                <input type="password" name="password" placeholder="Enter to your password" value={this.state.password} onChange={this.handleChange} />
                <input type="submit" value="Login" />
                <p>{this.errorMessage()}</p>
            </form>
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
        dispatchFetchUserLogin: (items) => dispatch(fetchUserLogin(items))
    }
}

export default connect(mSTP, mDTP)(UserLoginForm)