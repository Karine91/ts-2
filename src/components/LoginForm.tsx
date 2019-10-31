import React, { FunctionComponent } from 'react';
import { compose, ActionCreator } from 'redux';
import { AppState } from '../store';
import { FormControl, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Field, reduxForm, InjectedFormProps, WrappedFieldProps } from 'redux-form';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
            '& input': {
                color: 'white',
            }
        },
        button: {
            margin: theme.spacing(1),
        },
    }),
);

const Login = (props: InjectedFormProps) => {
    const { handleSubmit, pristine, submitting, reset } = props;

    const classes = useStyles();

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <FormControl>
                    <Field
                        id="email"
                        name="email"
                        component={({
                            input: { value, onChange }
                        }: WrappedFieldProps) =>
                            <TextField
                                id="email"
                                value={value}
                                onChange={onChange}
                                className={classes.textField}
                                label="Email address"
                                margin="normal"
                            />
                        }
                        type="text"
                    />
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <Field
                        name="password"
                        component={({
                            input: { value, onChange }
                        }: WrappedFieldProps) =>
                            <TextField
                                id="password"
                                value={value}
                                onChange={onChange}
                                className={classes.textField}
                                label="Password"
                                margin="normal"
                            />
                        }
                        type="text"
                    />
                </FormControl>
            </div>

            <div>
                <Button disabled={pristine || submitting} type="submit" variant="contained" color="primary" className={classes.button}>
                    Submit
                </Button>
                <Button type="button" disabled={pristine || submitting} onClick={reset} variant="contained" color="primary" className={classes.button}>
                    Clear Values
                </Button>
            </div>
        </form>
    )
}

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default reduxForm({
    form: 'login'
})(Login);

