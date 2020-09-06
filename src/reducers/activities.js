export default function activities(state = [], action) {
    switch (action.type) {
      case 'ADD_ACTIVITY':
        // return {
        //   ...state,
        //   activities: [...state.activities, action.activity]
        // }

      case 'GET_ACTIVITIES':
        return (
          action.activities
        )
        // return [
        //   ...state,
        //   action.activities
        // ]

      default:
        return state;
    }
  };