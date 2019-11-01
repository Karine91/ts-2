
import { IUserCreated } from '../types';
import { getUsersListActionTypes } from '../actions/users';

const initState: IUsersState = {
    users: [],
}

export interface IUsersState {
    users: IUserCreated[]
}

const users = (state: IUsersState = initState, action: getUsersListActionTypes) => {
    switch (action.type) {

        default:
            return state;
    }
}


export default users;