import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import * as actions from '../actions';

const { width, height } = Dimensions.get('window');
  let temp =[];
  let total = 0;
class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }
  render() {

  return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ marginRight: 10 }}>
      <Image
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/unityone-65a80.appspot.com/o/backgrounds%2FFood.jpg?alt=media&token=cfac46b1-cc0d-4b2a-a4bf-4295f78bb861' }}
      style={{ height: 100, width: 100 }}
      />
      </View>
      <View style={{ flexDirection: 'column' }}>
      <View style={{ flexDirection: 'row' }}>
        <Text>{this.props.item.Name}</Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text>Ingredient: </Text>
        <Text style={{ flexWrap: 'wrap'}}>{this.props.item.Ingredients}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>Type: </Text>
        <Text>{this.props.item.Type}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>Rating: </Text>
        <Text>{this.props.item.Rating}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>Price: </Text>
        <Text>{this.props.item.Price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          total = total + parseInt(this.props.item.Price);
          temp.push(this.props.item);
          this.props.total(total);
          this.props.itemsBought(temp);
        }}
        >
        <Text>Add to cart</Text>
      </TouchableOpacity>
      </View>
      </View>
  );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 0.490,
      height: 150,
      backgroundColor: '#ffffff'
    },
    containerBig: {
      flex: 0.490,
      height: 80,
      backgroundColor: '#ffffff'
    },
    text: {
      alignSelf: 'center'
    }
});

export default connect(null,actions)(ListItem);
