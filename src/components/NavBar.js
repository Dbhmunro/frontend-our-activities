import React from 'react';
import { Link } from "react-router-dom";
import { logoutUser } from '../actions/users'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = (props) => {

    const handleClick = () => {
        props.dispatchLogoutUser()
    }

    const determineLinks = () => {
        if (!!localStorage.userId) {
            return (
                <>
                <Nav variant="tabs" ActiveKey="/">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/activities">My Activities</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3" onClick={handleClick}>Logout</Nav.Link>
                    </Nav.Item>
                </Nav>
                <br />
                <br />
                </>
            )
        } else {
            return (
                <>
                <Nav variant="tabs" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/login">Login/Signup</Nav.Link>
                    </Nav.Item>
                </Nav>
                <br />
                <br />
                </>
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