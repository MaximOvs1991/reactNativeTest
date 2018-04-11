import React, { Component } from 'react';
import { LoginForm } from '../components/login-form';
import { connect } from 'react-redux'
import { setUserCreds } from "../config/actions";

class LoginScreen extends Component {
    static navigationOptions = {
        drawerLockMode: 'locked-closed',
        drawerLabel: () => null
    };

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(data) {
        this.props.setUserCreds(data);
        this.props.navigation.navigate('home');
    }

    render() {
        let loginFormConfig = {
            title: 'Welcome',
            buttonText: 'Log In',
            userNameInputPlaceholder: 'username',
            passwordInputPlaceholder: 'password'
        };

        return(
            <LoginForm config={loginFormConfig}
                       onSubmit={this.onFormSubmit}/>
        );
    }
}

export default connect(null, (dispatch) => {
    return {
        setUserCreds: (creds) => {
            dispatch(setUserCreds(creds));
        }
    }
})(LoginScreen);