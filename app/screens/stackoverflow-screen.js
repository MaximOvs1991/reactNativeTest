import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Header } from '../components/header';
import { List } from '../components/list';

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
                <ScrollView>
                    <List/>
                </ScrollView>
            </View>
        );
    }
}