import React, { useEffect } from 'react';
import { ActionCreator } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';

import { getUsersList, IGetUsersListAction } from '../actions/users'
import { IUserCreated } from '../types';

interface StateProps {
    users: IUserCreated[]
}

interface DispatchProps {
    getUsersList: ActionCreator<IGetUsersListAction>
}

type Props = StateProps & DispatchProps;


const UsersList: React.SFC<Props> = (props: Props) => {

    useEffect(() => {
        props.getUsersList();
    }, []);

    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    users: state.users.users
});

const mapDispatchToProps = {
    getUsersList
}

export default connect<StateProps, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(UsersList);
