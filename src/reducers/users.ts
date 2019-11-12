
import { IUsersList } from '../types';
import { getUsersListActionTypes } from '../actions/users';
import * as types from '../actions/actionTypes';

export interface IUsersState {
    users: IUsersList,
    isLoading: boolean
}

const initState: IUsersState = {
    users: {} as IUsersList,
    isLoading: false
}

const users = (state: IUsersState = initState, action: getUsersListActionTypes) => {
    switch (action.type) {
        case types.GET_USERS_LIST:
            return {
                ...state,
                isLoading: true,
            }
        case types.GET_USERS_LIST_SUCCESS:
            return {
                isLoading: false,
                users: action.payload
            }
        case types.GET_USERS_LIST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}


export default users;