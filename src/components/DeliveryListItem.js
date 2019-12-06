import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class DeliveryListItem extends Component {
  render() {
    console.log(this.props.listItem.photo);

    return (
      <View style={styles.mainContainer}>
        <View style={styles.photoContainer}>
          <Image style={styles.photo} source={this.props.listItem.photo} />
        </View>
        <View style={styles.footerContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  mainContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  photoContainer: {
    height: 70,
    alignSelf: 'stretch',
  },
  footerContainer: {
    height: 30,
    alignSelf: 'stretch',
    backgroundColor: 'gold',
  },
});
