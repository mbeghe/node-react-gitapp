import { SET_USER_DETAILS } from '../actions/actionTypes';

const deafultState = {
    details: null,
    loading: true
}

function details(state = deafultState, action) {
    switch(action.type) {
        case SET_USER_DETAILS:
            return { ...state, details: action.details, loading: false }

        default:
            return state
    }
}

export default details;