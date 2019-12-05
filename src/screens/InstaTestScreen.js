import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class InstaTestScreen extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.actionsContanier} />
                <View style={styles.listContainer} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    listContainer: {
        backgroundColor: 'orange',
        flex: 1,
        alignSelf: 'stretch',
    },
    actionsContanier: {
        height: 75,
        alignSelf: 'stretch',
        
    },
});