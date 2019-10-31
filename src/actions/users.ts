import * as types from './actionTypes';
import { IUserCreated, TError } from '../types';

export interface IGetUsersListAction {
    type: typeof types.GET_USERS_LIST
}

export interface IGetUsersListSuccessAction {
    type: typeof types.GET_USERS_LIST_SUCCESS,
    payload: IUserCreated[]
}

export interface IGetUsersListErrorAction {
    type: typeof types.GET_USERS_LIST_ERROR,
    payload: TError
}

export const getUsersList = () => ({
    type: types.GET_USERS_LIST
});

export const getUsersListSuccess = (payload: IUserCreated[]) => ({
    type: types.GET_USERS_LIST_SUCCESS,
    payload
});

export const getUsersListError = (error: TError) => ({
    type: types.GET_USERS_LIST_ERROR,
    payload: error
});

export type getUsersListActionTypes = IGetUsersListAction | IGetUsersListSuccessAction | IGetUsersListErrorAction;