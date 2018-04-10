import React, { Component } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/header';

export class StackoverflowScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Stackoverflow'
    };

    constructor() {
        super();

        async function getReactNativeTaggedQuestions() {
            try {
                let response = await fetch(
                    'http://api.stackexchange.com/docs/questions#order=desc&sort=activity&tagged=react-native&site=stackoverflow&run=true'
                );
                let responseJson = await response.json();
                return responseJson.movies;
            } catch (error) {
                console.error(error);
            }
        }

        let data = getReactNativeTaggedQuestions();
    }

    render() {
        const headerConfig = {
            navigationRef: this.props.navigation,
            title: 'Stackoverflow'
        };

        let rowView = (index) => {
            return { backgroundColor: index % 2 === 0 ? '#636e72' : '#fff' };
        };

        return(
            <View>
                <Header config={headerConfig}/>
                <ScrollView>
                    <FlatList
                        data={[{key: 'a'}, {key: 'b'}]}
                        renderItem={({item, index}) => {
                            return(<Text style={[styles.listItem, rowView(index)]}>{item.key}</Text>);
                        }}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20
    }
});