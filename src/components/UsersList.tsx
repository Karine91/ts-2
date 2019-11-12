import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';

import { getUsersList } from '../actions/users'


const UsersList: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: AppState) => (state.users.users));

    useEffect(() => {
        dispatch(getUsersList());
    }, []);

    return (
        <div>
            <div>{users.data && users.data.map(el => (<div><small><pre>{JSON.stringify(el, null, 2)}</pre></small></div>))}</div>
        </div>
    )
}


export default UsersList;
