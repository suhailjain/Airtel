import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

class Boot extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    axios.get('https://demo5434501.mockable.io/hello')
    .then((response) =>
    {
      this.props.burgerListO(response.data.Burger);
      this.props.pizzaListO(response.data.Pizza);
      this.props.pastaListO(response.data.Pasta);
      this.props.burgerList(response.data.Burger);
      this.props.pizzaList(response.data.Pizza);
      this.props.pastaList(response.data.Pasta);
      console.log(response.data);
    })
    .then(() => Actions.main({ type: 'replace' }));
  }
  render() {
    console.log('Boot');
    return (
      <View>
        <Text>Boot</Text>
      </View>
    );
  }
}

export default connect(null,actions)(Boot);
