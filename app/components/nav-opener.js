import React, { Component } from 'react';
import { TouchableHighlight, View, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export class NavOpener extends Component {
    onPress = () => {
        this.props.navRef.navigate('DrawerOpen');
    };

    render () {
        return (
            <TouchableHighlight
                onPress={this.onPress}>
                <View style={styles.iconHolder}>
                    <MaterialIcons name="menu" size={40}/>
                </View>
            </TouchableHighlight>
        );
    };
}

const styles = StyleSheet.create({
    iconHolder: {
        width: 40,
        height: 40
    }
});