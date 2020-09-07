export default function users(state = {}, action) {
    switch (action.type) {
      case 'ERROR_MESSAGE':
        return {
          message: action.message
        }

      case 'LOGIN_USER':
        localStorage.setItem('userId', action.user.id)
        return (
          action.user
        )
      
      case 'LOGOUT_USER':
        localStorage.removeItem('userId')
        const newState = {}
        return (
          newState
        )

      default:
        return state;
    }
};