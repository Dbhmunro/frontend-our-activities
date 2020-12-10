export default function users(state = {}, action) {
    switch (action.type) {
      case 'ERROR_MESSAGE':
        return {
          message: action.message
        }

      case 'LOGIN_USER':
        localStorage.setItem('token', action.token)
        return (
          action.user
        )
      
      case 'LOGOUT_USER':
        localStorage.removeItem('token')
        const newState = {}
        return (
          newState
        )

      default:
        return state;
    }
};