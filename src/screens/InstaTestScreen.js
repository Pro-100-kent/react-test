import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class InstaTestScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.actionsContainer}>
          <View style={styles.photoButtonContainer} />
          <View style={styles.titleContainer} />
          <View style={styles.bestVideosButtonContainer} />
          <View style={styles.sendMessageButtonContainer} />
        </View>
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
  actionsContainer: {
    height: 75,
    alignSelf: 'stretch',
    borderBottomWidth: 3,
    borderBottomColor: 'gray',
  },
  photoButtonContainer: {
    backgroundColor: 'black',
    height: 45,
    width: 45,
    margin: 15,
  },
  titleContainer: {},
  bestVideosButtonContainer: {},
  sendMessageButtonContainer: {},
});
