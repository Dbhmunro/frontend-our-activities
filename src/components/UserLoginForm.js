// import React, { useState } from 'react'
import React from 'react'
import { connect } from 'react-redux'
import { fetchUserLogin } from '../actions/users'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function UserLoginForm(props) {
    // state = {
    //     email: "",
    //     password: ""
    // }

    // const [form, setValues] = useState({
    //     email: "",
    //     password: ""
    // })

    // const handleChange = e => {
    //     // this.setState({
    //     //     [e.target.name]: e.target.value
    //     // })
    //     setValues({
    //         [e.target.name]: e.target.value
    //     })
    // }

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // e.preventDefault()
        props.dispatchFetchUserLogin(data)
        // this.setState({
        //     email: "",
        //     password: ""
        // })
        // setValues({
        //     email: "",
        //     password: ""
        // })
    }

    // const errorMessage = () => {
    //     if(props.message) {
    //         return props.message
    //     }
    // }
    
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="email" ref={register} placeholder="Enter your email" />
            <input type="password" name="password" ref={register} placeholder="Enter your password" />
            <input type="submit" value="Login" />
            {/* <p>{errorMessage()}</p> */}
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