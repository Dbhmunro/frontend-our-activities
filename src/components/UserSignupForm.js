import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchUserSignup } from '../actions/users'
import { Link } from "react-router-dom";

function UserSignupForm(props) {
    // state = {
    //     username: "",
    //     email: "",
    //     password: ""
    // }
    const [form, setValues] = useState({
        username: "",
        email: "",
        password: ""
    })
    
    const handleChange = e => {
        setValues({
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.dispatchFetchUserSignup(form)
        // this.setState({
        //     username: "",
        //     email: "",
        //     password: ""
        // })
        setValues({
            username: "",
            email: "",
            password: ""
        })
    }

    const errorMessage = () => {
        if(props.message) {
            return props.message
        }
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Enter a username" value={form.username} onChange={handleChange} />
            <input type="text" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Enter a password" value={form.password} onChange={handleChange} />
            <input type="submit" value="Signup" />
            <p>{errorMessage()}</p>
        </form>
        <h4>Already have an account, login <Link to="/login">here</Link></h4>
        </>
    )
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