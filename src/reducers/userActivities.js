export default function userActivities(state = [], action) {
    switch (action.type) {
      case 'GET_USER_ACTIVITIES':
            return (
                action.activities
            )

      default:
        return state;
    }
  };