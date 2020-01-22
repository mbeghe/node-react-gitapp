import { combineReducers } from 'redux';
import usersList from '../reducers/usersListReducer'
import repositories from '../reducers/repositoriesReducer';
import details from '../reducers/userDetailReducer';

const rootReducer = combineReducers({
    usersList,
    repositories,
    details
})

export default rootReducer;