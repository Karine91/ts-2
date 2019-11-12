import * as types from './actionTypes';
import { IUserSaved, TError, IUsersList } from '../types';
import { ActionCreator } from 'redux';

export interface IGetUsersListAction {
    type: typeof types.GET_USERS_LIST
}

export interface IGetUsersListSuccessAction {
    type: typeof types.GET_USERS_LIST_SUCCESS,
    payload: IUsersList
}

export interface IGetUsersListErrorAction {
    type: typeof types.GET_USERS_LIST_ERROR,
    payload: TError
}

export const getUsersList: ActionCreator<IGetUsersListAction> = () => ({
    type: types.GET_USERS_LIST
});

export const getUsersListSuccess: ActionCreator<IGetUsersListSuccessAction> = (payload: IUsersList) => ({
    type: types.GET_USERS_LIST_SUCCESS,
    payload
});

export const getUsersListError: ActionCreator<IGetUsersListErrorAction> = (error: TError) => ({
    type: types.GET_USERS_LIST_ERROR,
    payload: error
});

export type getUsersListActionTypes = IGetUsersListAction | IGetUsersListSuccessAction | IGetUsersListErrorAction;