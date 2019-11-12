import React from 'react';
import { ActionCreator } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { SubmissionError } from 'redux-form';
import LoginForm from '../components/LoginForm';
import UsersList from '../components/UsersList';
import { TError } from '../types';

import { loginUser, ILoginUserAction } from '../actions/auth';

interface StateProps {
    isAuthenticated: boolean
    error?: TError
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
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error
});

const mapDispatchToProps = { loginUser };

export default connect<StateProps, DispatchProps, {}, AppState>(mapStateToProps, mapDispatchToProps)(Login);

