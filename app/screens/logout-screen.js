import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Header } from '../components/header';

export default class LogoutScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Log Out'
    };

    render() {
        const headerConfig = {
            navigationRef: this.props.navigation,
            title: 'Log Out'
        };

        return(
            <View style={[styles.container, styles.placeholder]}>
                <View style={styles.placeholder}>
                    <Header config={headerConfig}/>
                </View>
                <View style={[styles.content, styles.placeholder]}>
                    <Text style={styles.title}>Good Bye</Text>
                    <View style={[styles.btnHolder, styles.placeholder]}>
                        <Button style={styles.btn}
                                color="#636e72"
                                onPress={() => this.props.navigation.navigate('login')}
                                title='Log Out'
                        />
                    </View>
                    <View style={styles.placeholder}></View>
                </View>
                <View style={styles.placeholder}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    placeholder: {
        flex: 1
    },
    container: {
        flexDirection: 'column'
    },
    content: {
        alignItems: 'center'
    },
    btnHolder: {
        width: 200
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        flex: 1
    }
});