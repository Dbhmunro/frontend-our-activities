export default function activitiesWithCounts(state = [], action) {
    switch (action.type) {
      case 'GET_ACTIVITIES_WITH_COUNTS':
            return (
                action.activities
            )

      default:
        return state;
    }
  };