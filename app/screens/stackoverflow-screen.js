import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
                <ScrollView style={styles.content}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae debitis dicta ea earum et, expedita facilis fugit magni nisi nulla odio, officiis placeat porro quam reprehenderit vitae. Earum, voluptatibus.
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 10
    }
});