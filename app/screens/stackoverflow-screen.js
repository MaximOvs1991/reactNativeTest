import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Header } from '../components/header';
import { List } from '../components/list';
import { connect } from 'react-redux'
import { fetchListStart } from '../config/actions';

export class StackoverflowScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Stackoverflow'
    };

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const headerConfig = {
            navigationRef: this.props.navigation,
            title: 'Stackoverflow'
        };

        return(
            <View>
                <Header config={headerConfig}/>
                <ScrollView>
                    {
                        this.props.items.length ?
                            (<List items={this.props.items} isLoading={this.props.isLoading}/>)
                            : null
                    }
                </ScrollView>
            </View>
        );
    }
}

export default connect(
    (store) => {
        return {
            items: store.StackoverflowReducer.items,
            isLoading: store.StackoverflowReducer.isLoading
        };
    },
    (dispatch) => {
        return {
            getPosts: () => dispatch(fetchListStart())
        }
    }
)(StackoverflowScreen);