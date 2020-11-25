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
        .then(user => {
            if (user.message) {
                dispatch({ type: ERROR_MESSAGE, message: user.message})
            } else {
                dispatch({ type: LOGIN_USER, user: user })
            }
        })
    };
}

export const getUser = (userId) => {
    return (dispatch) => {
        fetch('http://localhost:3000/sessions', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    user: {
                        id: userId
                    }
                })
            })
            .then(response => response.json())
            .then(user => {
                return(dispatch({ type: LOGIN_USER, user: user }))
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
        .then(user => {
            if (user.message) {
                dispatch({ type: ERROR_MESSAGE, message: user.message})
            } else {
                dispatch({ type: LOGIN_USER, user: user })
            }
        })
    };
}
