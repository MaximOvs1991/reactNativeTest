import React from 'react';
import { LoginForm } from '../components/login-form';

export class LoginScreen extends React.Component {
    static navigationOptions = {
        drawerLockMode: 'locked-closed'
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