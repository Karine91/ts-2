import { Action } from 'redux';
import * as types from '../actions/actionTypes';
import { TError } from '../types'

import { LoginUserActionTypes } from '../actions/auth';

interface IStore {
    isAuthenticated: boolean,
    isLoading: boolean,
    error?: TError
}

const initState: IStore = {
    isAuthenticated: false,
    isLoading: false,
    error: undefined
}

const authReducer = (state: IStore = initState, action: LoginUserActionTypes): IStore => {
    switch (action.type) {
        case types.LOGIN_USER:
            return {
                ...state,
                isLoading: true
            }
        case types.LOGIN_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case types.LOGIN_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default authReducer;