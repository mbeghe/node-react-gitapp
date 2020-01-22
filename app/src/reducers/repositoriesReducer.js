import { SET_USER_DETAILS_REPOSITORIES } from '../actions/actionTypes';

const deafultState = {
    repositories: [],
    loading: true
}

function repositories(state = deafultState, action) {
    switch(action.type) {
        case SET_USER_DETAILS_REPOSITORIES:
            return { ...state, repositories: action.repositories, loading: false }

        default:
            return state
    }
}

export default repositories;