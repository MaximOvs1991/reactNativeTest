import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

// components
import { LoginForm } from './components/login-form';

export default class App extends Component {
    render() {
        let loginFormConfig = {
            title: 'Welcome',
            buttonText: 'Log In',
            userNameInputPlaceholder: 'username',
            passwordInputPlaceholder: 'password'
        };

        return(
            <View style={{flex: 1}}>
                <StatusBar backgroundColor="#636e72"
                           barStyle="dark-content"/>
                <LoginForm config={loginFormConfig}/>
            </View>
        );
    }
}