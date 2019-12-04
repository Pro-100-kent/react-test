import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class SecondTestScreen extends Component {
    render() {
        return (
            <View style={{flex: 6, justifyContent: 'flex-start', alignItems: 'flex-start',}}>
                <View style={{flex: 1.5, height: 50, backgroundColor: 'green', alignSelf: 'stretch'}} />
                <View style={{flex: 2, height: 50, backgroundColor: 'orange', alignSelf: 'stretch'}} />
                <View style={{flex: 2.5, height: 50, backgroundColor: 'purple', alignSelf: 'stretch'}}/>
            </View>
        );
    }
}