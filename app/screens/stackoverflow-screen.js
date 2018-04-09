import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {Header} from "../components/header";

export class StackoverflowScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Stackoverflow'
    };

    render() {
        const headerConfig = {
            navigationRef: this.props.navigation,
            title: 'Stackoverflow'
        };

        return(
            <View>
                <Header config={headerConfig}/>
            </View>
        );
    }
}