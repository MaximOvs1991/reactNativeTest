import React, { Component } from 'react';
import {View} from 'react-native';
import {Header} from "../components/header";

export class LogoutScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Log Out'
    };

    render() {
        const headerConfig = {
            navigationRef: this.props.navigation,
            title: 'Log Out'
        };

        return(
            <View>
                <Header config={headerConfig}/>
            </View>
        );
    }
}