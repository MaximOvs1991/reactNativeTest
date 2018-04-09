import React, { Component } from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export class Header extends Component {
    render() {
        const navigation = this.props.config.navigationRef;

        return(
            <View style={styles.header}>
                <TouchableNativeFeedback style={styles.icon}
                                         onPress={this._onPressButton(navigation)}>
                    <MaterialIcons name="menu" size={40}/>
                </TouchableNativeFeedback>
                <Text style={styles.title}>{this.props.config.title}</Text>
            </View>
        );
    }

    _onPressButton(navigation) {
        // alert('true');
        // navigation.navigate('DrawerOpen');
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ff8c00',
        paddingVertical: 10,
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
        flex: 2,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 10
    }
});