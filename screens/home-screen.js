import React from 'react';
import { View, Navigator } from 'react-native';

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        drawerLabel: 'Home'
    };

    render() {
        return(
            <View>
                <Navigator/>
                HomeScreen
            </View>
        );
    }
}