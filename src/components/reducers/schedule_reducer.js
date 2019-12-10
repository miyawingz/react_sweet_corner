const DEFAULT_STATE = {
    schedule: []
}

function scheduleReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'GET_SCHEDULE':
            return { ...state, schedule: action.schedule };
        default:
            return state;
    }
}

export default scheduleReducer;