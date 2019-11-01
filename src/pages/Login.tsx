import React, { FunctionComponent } from 'react';
import { ActionCreator } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';

import LoginForm from '../components/LoginForm';
import UsersList from '../components/UsersList';

import { loginUser, ILoginUserAction } from '../actions/auth';

interface StateProps {
    isAuthenticated: boolean
}

interface DispatchProps {
    loginUser: ActionCreator<ILoginUserAction>
}

type Props = StateProps & DispatchProps;

const Login: React.FC<Props> = (props) => {
    const { loginUser, isAuthenticated } = props;

    const onSubmit = (values: FormData | any) => {
        loginUser(values);
    }

    return <div>
        {
            isAuthenticated ?
                (
                    <UsersList />
                ) : (
                    <LoginForm onSubmit={onSubmit} />
                )
        }
    </div>
}

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = { loginUser };

export default connect<StateProps, DispatchProps, {}, AppState>(mapStateToProps, mapDispatchToProps)(Login);

