export default function activities(state = [], action) {
    switch (action.type) {
      case 'ADD_ACTIVITY':
        return [
          ...state, action.activity
        ]

      case 'GET_ACTIVITIES':
        return (
          action.activities
        )

      default:
        return state;
    }
  };