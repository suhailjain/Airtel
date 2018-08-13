import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchView extends Component {
  constructor() {
    super();
    this.state = { text: '' };
  }
  textChange = (search) => {
    //filtering burgers
    let temp = [];
    this.props.burgerso.forEach((child) => {
    if (child.Name.startsWith(search) || child.Type.startsWith(search) || child.lastName.startsWith(search)) {
      temp.push(child);
    }
    });
    this.props.burgerList(temp);

    //filtering pizzas
    let temp1 = [];
    this.props.pastaso.forEach((child) => {
    if (child.Name.startsWith(search) || child.Type.startsWith(search) || child.lastName.startsWith(search)) {
      temp1.push(child);
      }
    });
    this.props.pastaList(temp1);

    //filtering pasta
    let temp2 = [];
    this.props.pizzaso.forEach((child) => {
    if (child.Name.startsWith(search) || child.Type.startsWith(search) || child.lastName.startsWith(search)) {
      temp2.push(child);
      }
    });
    this.props.pizzaList(temp2);

  }
  clear = () => {
    this.setState({ text: '' });
    console.log(this.props.burgerso);
    this.props.burgerList(this.props.burgerso);
  }
  render() {
    return (
      <SearchBar
      lightTheme
      round
      onChangeText={this.textChange}
      onClear={this.clear}
      clearIcon
      placeholder='Search for anything'
      containerStyle={{ marginTop: 30, backgroundColor: '#DBDBDB' }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    burgerso: state.burgerso,
    pizzaso: state.pizzaso,
    pastaso: state.pastaso
  };
};

export default connect(mapStateToProps, actions)(SearchView);
