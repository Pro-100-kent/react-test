import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class SecondTestScreen extends Component {
    render() {
        return (
            <View style={{flex: 10, justifyContent: 'flex-start', alignItems: 'flex-start',}}>
                <View style={{backgroundColor: 'orange', position: 'absolute', height: 900, top: 0, bottom: 60, left: 0, right: 0, margin: 15 }} />
                <View style={{height: 50, backgroundColor: 'purple', position: 'absolute', bottom: 0, left: 0, right: 0, margin: 15 }} />
            </View>
        );
    }
}