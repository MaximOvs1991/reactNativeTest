import React, { Component } from 'react';
import { LoginForm } from '../components/login-form';

export class LoginScreen extends Component {
    static navigationOptions = {
        drawerLockMode: 'locked-closed',
        drawerLabel: () => null
    };

    render() {
        let loginFormConfig = {
            title: 'Welcome',
            buttonText: 'Log In',
            userNameInputPlaceholder: 'username',
            passwordInputPlaceholder: 'password',
            navigation: this.props.navigation
        };

        return(
            <LoginForm config={loginFormConfig}/>
        );
    }
}