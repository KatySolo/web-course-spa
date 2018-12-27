import React from 'react';
import { Redirect } from 'react-router-dom';
import Lock from '../lock/Lock';
import isAuthenticated from '../isAuthenticated';

const Login = (props) => (
    isAuthenticated() ? (
        <Redirect to={{
            pathname: '/admin',
            state: { from: props.location }
        }} />
    ) : (
        <Lock location={props.location} />
    )
)

export default Login;
