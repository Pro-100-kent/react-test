import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class DeliveryListItem extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'gold',
        height: 115,
        width: 300,
    },
});

