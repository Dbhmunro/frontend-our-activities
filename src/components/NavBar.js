import React from 'react';
import { Link } from "react-router-dom";
import { logoutUser } from '../actions/users'
import { connect } from 'react-redux'

const NavBar = (props) => {

    const handleClick = () => {
        props.dispatchLogoutUser()
    }

    const determineLoginLink = () => {
        if (!!localStorage.userId) {
            return (
                <button onClick={handleClick}>Logout</button>
            )
        } else {
            return (
                <Link to="/login">Login</Link>
            )
        }
    }

    return (
        <div>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/categories">Categories</Link>
                </li>
                <li>
                {determineLoginLink()}
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLogoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)