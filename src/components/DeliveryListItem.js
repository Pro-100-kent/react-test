import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class DeliveryListItem extends Component {
  render() {
    // console.log(this.props.listItem.photo);
    //console.log(this.props.listItem.restName);

    return (
      <View style={styles.mainContainer}>
        <View style={styles.photoContainer}>
          <Image
            style={styles.photo}
            source={this.props.listItem.photo}
            resizeMode="cover"
          />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.descriptionContainer}>
            <View style={styles.restaurantTitleContainer}>
              <Text style={styles.restaurantTitle}>
                {this.props.listItem.restName}
              </Text>
            </View>
            <View style={styles.deliveryTimeContainer}>
              <View style={styles.deliveryTimeColoredContainer}>
                <Text style={styles.deliveryTime}>60 минут.</Text>
              </View>
            </View>
          </View>
          <View style={styles.characteristicsContainer}>
            <Text style={styles.restaurantScore}>4.6</Text>
            <Text style={styles.minPrice}>Заказ от 990 р</Text>
            <Text style={styles.foodType}>{this.props.listItem.foodType}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  mainContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 6,
    elevation: 5,
  },
  photoContainer: {
    height: 150,
    alignSelf: 'stretch',
  },
  footerContainer: {
    flex: 1,
    //height: 30,
    alignSelf: 'stretch',
    backgroundColor: 'white',
  },
  descriptionContainer: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
  },
  characteristicsContainer: {
    height: 30,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    flexDirection: 'row',
  },
  restaurantTitleContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  deliveryTimeContainer: {},
  restaurantTitle: {
    fontSize: 25,
    color: 'black',
    margin: 10,
  },
  deliveryTimeColoredContainer: {
    backgroundColor: '#00e767',
    margin: 8,
    padding: 4,
    borderRadius: 6,
  },
  deliveryTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  restaurantScore: {
    marginLeft: 12,
    color: '#ffc400',
    fontWeight: 'bold',
  },
  minPrice: {
    marginLeft: 12,
    color: 'gray',
  },
  foodType: {
    marginLeft: 12,
    color: 'gray',
  },
});
