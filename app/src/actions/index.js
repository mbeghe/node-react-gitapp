import { SET_USERS_RANGE_TO_LIST, SET_USER_DETAILS, SET_USER_DETAILS_REPOSITORIES } from './actionTypes';
//const serverURL = 'http://localhost:3000';
const serverURL = 'https://aqueous-shore-54596.herokuapp.com';

function InsertUsersRangeToList(users, rangeIndex) {
    return {
        type: SET_USERS_RANGE_TO_LIST,
        users,
        rangeIndex
    }
}

function InsertUserRepositories(repositories) {
    return {
        type: SET_USER_DETAILS_REPOSITORIES,
        repositories
    }
}

function InsertUserDetails(details) {
    return {
        type: SET_USER_DETAILS,
        details
    }
}

export function getUsersRange(index) {
    return dispatch => {
        const url = `${serverURL}/api/users?since=${index}`;
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            dispatch(InsertUsersRangeToList(json.users, json.next));
        });
    }
}

export function getUserRepositories(username) {
    return dispatch => {
        const url = `${serverURL}/api/users/${username}/repos`;
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            dispatch(InsertUserRepositories(json.repositories));
        });
    }
}

export function getUserDetails(username) {
    return dispatch => {
        const url = `${serverURL}/api/users/${username}/details`;
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            dispatch(InsertUserDetails(json));
        });
    }
}