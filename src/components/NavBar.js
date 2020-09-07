import React from 'react';
import { Link } from "react-router-dom";
import { logoutUser } from '../actions/users'
import { connect } from 'react-redux'

const NavBar = (props) => {

    const handleClick = () => {
        props.dispatchLogoutUser()
    }

    const determineLinks = () => {
        if (!!localStorage.userId) {
            return (
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                    <Link to="/activities">My Activities</Link>
                    </li>
                    <li>
                    <a href="" onClick={handleClick}>Logout</a>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                    <Link to="/login">Login/Signup</Link>
                    </li>
                </ul>
            )
        }
    }

    return (
        <div>
            {determineLinks()}
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