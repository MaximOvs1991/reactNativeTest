import React, { Component } from 'react';
import { View } from 'react-native';

export class LogoutScreen extends Component {
    static navigationOptions = {
        title: 'Log Out',
        drawerLabel: 'Log Out'
    };

    render() {
        return(
            <View>
                LogoutScreen
            </View>
        );
    }
}