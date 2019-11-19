import React from 'react';
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

interface IRenderField {
    id: string,
    label: string
}

const renderField = ({ id, label }: IRenderField) => ({
    input: { value, onChange }
}: WrappedFieldProps) =>
    <TextField
        id="email"
        value={value}
        onChange={onChange}
        label={label}
        margin="normal"
    />

const renderEmailField = renderField({ id: 'email', label: "Email address" });
const renderPasswordField = renderField({ id: 'password', label: "Password" });

export const Login = (props: InjectedFormProps) => {
    const { handleSubmit, pristine, submitting, reset, error } = props;

    const classes = useStyles();
    
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <FormControl>
                    <Field
                        id="email"
                        name="email"
                        className={classes.textField}
                        component={renderEmailField}
                        type="text"
                    />
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <Field
                        name="password"
                        className={classes.textField}
                        component={renderPasswordField}
                        type="text"
                    />
                </FormControl>
            </div>
            {error && <strong style={{ color: 'red' }}>{error}</strong>}
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

export default reduxForm({
    form: 'login'
})(Login);

