import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TextInput
} from 'react-native';

export class LoginForm extends Component {
    constructor () {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.title}>{this.props.config.title}</Text>
                    <View style={styles.controlsHolder}>
                        <TextInput style={styles.formControl}
                                   placeholder={this.props.config.userNameInputPlaceholder}
                                   returnKeyType="next"
                                   onSubmitEditing={() => this.passwordInput.focus()}
                                   autoCapitalize="none"
                                   onChangeText={username => this.setState(username)}
                                   value={this.state.username}
                                   autoCorrect={false}
                        />
                        <TextInput style={styles.formControl}
                                   secureTextEntry
                                   placeholder={this.props.config.passwordInputPlaceholder}
                                   returnKeyType="go"
                                   onChangeText={password => this.setState(password)}
                                   value={this.state.password}
                                   autoCapitalize="none"
                                   ref={input => this.passwordInput = input}
                        />
                    </View>
                    <Button color="#636e72"
                            onPress={this.login}
                            title={this.props.config.buttonText}
                    />
                </View>
            </View>
        );
    }

    login() {
        alert(this.state);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b2bec3',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    box: {
        backgroundColor: "#FF8C00",
        padding: 20,
        borderRadius: 10,
        width: 300,
        shadowColor: '#000',
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
    formControl: {
        marginBottom: 10
    }
});