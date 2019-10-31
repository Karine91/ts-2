
import * as types from './actionTypes';
import { IUser, IUserCreated, TError } from '../types';


export interface ILoginUserAction {
    type: typeof types.LOGIN_USER,
    payload: IUser
}

export interface ILoginUserSuccessAction {
    type: typeof types.LOGIN_USER_SUCCESS,
    payload: IUserCreated
}

export interface ILoginUserErrorAction {
    type: typeof types.LOGIN_USER_ERROR,
    error: TError
}

export const loginUser = (user: IUser) => ({
    type: types.LOGIN_USER,
    payload: user
});

export const loginUserSuccess = (data: IUserCreated) => ({
    type: types.LOGIN_USER_SUCCESS,
    payload: data
});

export const loginUserError = (error: TError) => ({
    type: types.LOGIN_USER_ERROR,
    error
});

export type LoginUserActionTypes = ILoginUserAction | ILoginUserSuccessAction | ILoginUserErrorAction;
