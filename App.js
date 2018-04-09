import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import { Drawer } from './app/config/routes'

const App = () => (
    <View style={styles.appContainer}>
        <StatusBar
            backgroundColor="#ff8c00"
            barStyle="dark-content"
        />
        <Drawer/>
    </View>
);

export default App;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#b2bec3'
    }
});