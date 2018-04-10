import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Header } from '../components/header';

export class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home'
    };

    render() {
        const headerConfig = {
            navigationRef: this.props.navigation,
            title: 'Home'
        };

        return(
            <View style={styles.container}>
                <View style={styles.headerHolder}>
                    <Header config={headerConfig}/>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Hello, Steve!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    headerHolder: {
      flex: 1
    },
    content: {
        flex: 2
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40
    }
});