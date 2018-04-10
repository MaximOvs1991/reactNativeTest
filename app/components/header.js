import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavOpener } from './nav-opener';

export class Header extends Component {
    render() {
        return(
            <View style={styles.header}>
                <NavOpener navRef={this.props.config.navigationRef}/>
                <Text style={styles.title}>{this.props.config.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ff8c00',
        paddingVertical: 10,
        paddingRight: 55,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: 'black',
        borderTopColor: 'black',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: { width: 40, height: 40 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    }
});