import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TextInput
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            username: '',
            password: ''
        };

        this.setName = this.setName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setName(name) {
        this.setState({username: name});
    }

    setPassword(password) {
        this.setState({userpassword: password});
    }

    onSubmit() {
        if (
            !(this.state.username && this.state.username.length) ||
            !(this.state.password && this.state.password.length)
        ) {
            this.setState({error: true});
        }
        this.props.onSubmit(this.state);
    }

    render() {
        const navigation = this.props.config.navigation;

        return(
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.title}>{this.props.config.title}</Text>
                    <View style={styles.controlsHolder}>
                        <View style={styles.controlBox}>
                            <MaterialIcons style={styles.icon}
                                           name="face"
                                           size={26}/>
                            <TextInput style={styles.formControl}
                                       placeholder={this.props.config.userNameInputPlaceholder}
                                       returnKeyType="next"
                                       onSubmitEditing={() => this.passwordInput.focus()}
                                       autoCapitalize="none"
                                       autoCorrect={false}
                                       onChangeText={this.setName}
                            />
                        </View>
                        <View style={styles.controlBox}>
                            <MaterialIcons style={styles.icon}
                                           name="lock"
                                           size={26}/>
                            <TextInput style={styles.formControl}
                                        secureTextEntry
                                        placeholder={this.props.config.passwordInputPlaceholder}
                                        returnKeyType="go"
                                        autoCapitalize="none"
                                        ref={input => this.passwordInput = input}
                                        onChangeText={this.setPassword}
                            />
                        </View>
                    </View>
                    <Button color="#636e72"
                            onPress={this.onSubmit}
                            title={this.props.config.buttonText}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    box: {
        backgroundColor: '#ff8c00',
        padding: 20,
        borderRadius: 10,
        width: 300,
        shadowColor: 'black',
        shadowOffset: { width: 40, height: 40 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    controlsHolder: {
        paddingTop: 30,
        marginBottom: 30
    },
    controlBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    formControl: {
        flex: 1,
        marginBottom: 10
    }
});