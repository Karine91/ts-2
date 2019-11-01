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


const UsersList: React.FC<Props> = (props) => {

    useEffect(() => {
        props.getUsersList();
    }, []);

    return (
        <div>
            <pre>{JSON.stringify(props.users)}</pre>
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
