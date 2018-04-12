import React, { Component } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';

export class List extends Component {
    render() {
        let rowView = (index) => {
            return { backgroundColor: index % 2 === 0 ? '#636e72' : '#fff' };
        };

        if(this.props.isLoading){
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (
            <FlatList
                data={this.props.items}
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