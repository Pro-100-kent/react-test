import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import DeliveryListItem from '../components/DeliveryListItem';
import {images} from '../assets';

export default class DeliveryTestScreen extends Component {
  render() {
    const deliveryList = [
      {restName: 'МакДоналдс', foodType: 'Фастфуд', photo: images.maccoin},
      {restName: 'БургерКинг', foodType: 'Фастфуд', photo: images.king},
      {
        restName: 'ProntoPizza',
        foodType: 'Итальянская Кухня',
        photo: images.pizza,
      },
      {
        restName: 'Шаурма-на-УгляхЪ',
        foodType: 'Всемирная Кухня',
        photo: images.kot,
      },
      {restName: 'БургерКинг', foodType: 'Фастфуд', photo: images.king},
    ];

    return (
      <View style={styles.mainContainer}>
        <View style={styles.actionsContainer}>
          <View style={styles.photoButtonContainer} />
          <View style={styles.titleContainer} />
          <View style={styles.bestVideosButtonContainer} />
          <View style={styles.sendMessageButtonContainer} />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={deliveryList}
            renderItem={({item}) => <DeliveryListItem listItem={item} />}
          />
        </View>
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
    flex: 1,
    alignSelf: 'stretch',
  },
  actionsContainer: {
    height: 75,
    alignSelf: 'stretch',
    borderBottomWidth: 3,
    borderBottomColor: 'gray',
    flexDirection: 'row',
  },
  photoButtonContainer: {
    backgroundColor: 'black',
    height: 45,
    width: 45,
    margin: 15,
  },
  titleContainer: {
    backgroundColor: 'red',
    height: 45,
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  bestVideosButtonContainer: {
    backgroundColor: 'green',
    height: 45,
    width: 45,
    margin: 15,
  },
  sendMessageButtonContainer: {
    backgroundColor: 'purple',
    height: 45,
    width: 45,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
  },
});
