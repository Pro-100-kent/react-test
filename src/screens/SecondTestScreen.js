import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class SecondTestScreen extends Component {
    render() {
        return (
            <View style={{flex: 10, justifyContent: 'flex-start', alignItems: 'flex-start',}}>
                <View style={{backgroundColor: 'orange', flex: 10, alignSelf: 'stretch', margin: 8}} />
                <View style={{height: 50, backgroundColor: 'purple', alignSelf: 'stretch', margin: 18 }} />
            </View>
        );
    }
}