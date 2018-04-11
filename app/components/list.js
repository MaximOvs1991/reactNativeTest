import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

export class List extends Component {
    constructor() {
        super();

        this.state = {
            items: [],
            isLoading: true
        };
    }

    getPostsFromStackoveflow() {
        return fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=react-native&site=stackoverflow')
            .then(response => response.json())
            .then(parsed => {
                if ('error_id' in parsed) {
                    return alert(JSON.stringify(parsed));
                }

                this.setState(() => {
                    return {
                        items: parsed.items,
                        isLoading: false
                    };
                });
            })
            .catch(error => {
                alert(JSON.stringify(error));
            });
    };

    componentDidMount() {
        this.getPostsFromStackoveflow();
    }

    render() {
        let rowView = (index) => {
            return { backgroundColor: index % 2 === 0 ? '#636e72' : '#fff' };
        };

        if(this.state.isLoading){
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (
            <FlatList
                data={this.state.items}
                renderItem={({item, index}) => {
                    return(<Text style={[styles.listItem, rowView(index)]}>{item.title}</Text>);
                }}
            />
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