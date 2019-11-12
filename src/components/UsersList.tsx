import React, { useEffect } from 'react';
import { ActionCreator } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';

import { getUsersList, IGetUsersListAction } from '../actions/users'
import { IUsersList } from '../types';

interface StateProps {
    users: IUsersList
}

interface DispatchProps {
    getUsersList: ActionCreator<IGetUsersListAction>
}

type Props = StateProps & DispatchProps;


const UsersList: React.FC<Props> = ({ users, getUsersList }) => {

    useEffect(() => {
        getUsersList();
    }, []);

    return (
        <div>
            <div>{users.data && users.data.map(el => (<div></div>))}</div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    users: state.users.users
});

const mapDispatchToProps = {
    getUsersList
}

export default connect<StateProps, DispatchProps, {}, AppState>(mapStateToProps, mapDispatchToProps)(UsersList);
