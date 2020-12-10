const ERROR_MESSAGE = 'ERROR_MESSAGE'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export const fetchUserLogin = ({ email, password }) => {
    return (dispatch) => {
        fetch('http://localhost:3000/sessions', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    email,
                    password
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                dispatch({ type: ERROR_MESSAGE, message: data.message})
            } else {
                dispatch({ type: LOGIN_USER, user: data.user, token: data.token }) //dispatch token along with user
            }
        })
    };
}

export const getUser = (token) => { //this will be token instead of userId
    return (dispatch) => {
        fetch('http://localhost:3000/sessions', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    user: {
                        token: token //token instead of userId
                    }
                })
            })
            .then(response => response.json())
            .then(data => {
                return(dispatch({ type: LOGIN_USER, user: data.user, token: data.token }))
            } )
    }
}

export const logoutUser = () => ({type: LOGOUT_USER})

export const fetchUserSignup = ({ username, email, password }) => {
    return (dispatch) => {
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username,
                    email,
                    password
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            if (data.message) {
                dispatch({ type: ERROR_MESSAGE, message: data.message})
            } else {
                dispatch({ type: LOGIN_USER, user: data.user, token: data.token })
            }
        })
    };
}
