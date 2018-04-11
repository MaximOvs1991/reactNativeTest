import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/config/store';

import { Drawer } from './app/config/routes'

class App extends Component {
    constructor(props) {
        super(props);
        this.store = configureStore();
    }
    render() {
        return (
            <View style={styles.appContainer}>
                <StatusBar
                    backgroundColor="#ff8c00"
                    barStyle="dark-content"
                />
                <Provider store={this.store}>
                    <Drawer/>
                </Provider>
            </View>
        )
    }
}

export default App;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#b2bec3'
    }
});