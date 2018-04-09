import React, { Component } from 'react';
import {View} from 'react-native';
import {Header} from "../components/header";

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
            <View>
                <Header config={headerConfig}/>
            </View>
        );
    }
}