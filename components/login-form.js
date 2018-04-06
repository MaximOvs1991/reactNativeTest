import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TextInput
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export class LoginForm extends React.Component {
    render() {
        const navigation = this.props.config.navigation;

        console.log(navigation);

        return(
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.title}>{this.props.config.title}</Text>
                    <View style={styles.controlsHolder}>
                        <View style={styles.controlBox}>
                            <MaterialIcons style={styles.icon} name="face" size={26}> </MaterialIcons>
                            <TextInput style={styles.formControl}
                                       placeholder={this.props.config.userNameInputPlaceholder}
                                       returnKeyType="next"
                                       onSubmitEditing={() => this.passwordInput.focus()}
                                       autoCapitalize="none"
                                       autoCorrect={false}
                            />
                        </View>
                        <View style={styles.controlBox}>
                            <MaterialIcons style={styles.icon} name="lock" size={26}> </MaterialIcons>
                            <TextInput style={styles.formControl}
                                       secureTextEntry
                                       placeholder={this.props.config.passwordInputPlaceholder}
                                       returnKeyType="go"
                                       autoCapitalize="none"
                                       ref={input => this.passwordInput = input}
                            />
                        </View>
                    </View>
                    <Button color="#636e72"
                            onPress={() => navigation.navigate('home')}
                            title={this.props.config.buttonText}
                    />
                </View>
            </View>
        );
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
    controlBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    formControl: {
        flex: 1,
        marginBottom: 10
    }
});