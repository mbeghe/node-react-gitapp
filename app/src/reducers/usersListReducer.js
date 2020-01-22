import { SET_USERS_RANGE_TO_LIST } from '../actions/actionTypes';

const deafultState = {
    usersList: [],
    rangeIndex: 0
}

function usersList(state = deafultState, action) {
    switch(action.type) {
        case SET_USERS_RANGE_TO_LIST:
            return { ...state, usersList: action.users,  rangeIndex: action.rangeIndex }

        default:
            return state
    }
}

export default usersList;