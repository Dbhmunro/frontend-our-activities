import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchUserLogin } from '../actions/users'
import { Link } from "react-router-dom";

function UserLoginForm(props) {
    // state = {
    //     email: "",
    //     password: ""
    // }

    const [form, setValues] = useState({
        email: "",
        password: ""
    })

    handleChange = e => {
        // this.setState({
        //     [e.target.name]: e.target.value
        // })
        setValues({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        props.dispatchFetchUserLogin(form)
        // this.setState({
        //     email: "",
        //     password: ""
        // })
        setValues({
            email: "",
            password: ""
        })
    }

    errorMessage = () => {
        if(props.message) {
            return props.message
        }
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Enter your password" value={form.password} onChange={handleChange} />
            <input type="submit" value="Login" />
            <p>{errorMessage()}</p>
        </form>
        <h4>Don't have an account, sign up <Link to="/signup">here</Link></h4>
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
        dispatchFetchUserLogin: (items) => dispatch(fetchUserLogin(items))
    }
}

export default connect(mSTP, mDTP)(UserLoginForm)