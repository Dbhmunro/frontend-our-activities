import React from 'react'
import { useForm } from "react-hook-form"
import { connect } from 'react-redux'
import { fetchUserSignup } from '../actions/users'
import { Link } from "react-router-dom";

function UserSignupForm(props) {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        props.dispatchFetchUserSignup(data)
    }

    const errorMessage = () => {
        if(props.message) {
            return props.message
        }
    }
    
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="username" ref={register} placeholder="Enter a username" />
            <input type="text" name="email" ref={register} placeholder="Enter email" />
            <input type="password" name="password" ref={register} placeholder="Enter a password" />
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