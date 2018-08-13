import { Text, View, StyleSheet, TouchableOpacity, FlatList, Dimensions, Alert } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
import ListItem from './ListItem';
import SearchView from './SearchView';
import * as actions from '../actions';

const { width, height } = Dimensions.get('window');
let applied = 0;
class Main extends Component {
  constructor() {
    super();
    this.state = {visible: false};
  }
  componentWillMount() {

  }
  renderSeparator() {
    return (
      <View
        style={{
          height: 20,
          width: 15,
          backgroundColor: '#DBDBDB'
        }}
      />
    );
  }
  renderFooter() {
    return (
      <View
        style={{
          height: 15,
          width: 20,
          backgroundColor: '#DBDBDB',
        }}
      />
    );
  }
  renderHeader() {
    return (
      <View
        style={{
          height: 10,
          width: 20,
          backgroundColor: '#DBDBDB',
        }}
      />
    );
  }
  render() {
    return (
      <View style={{ backgroundColor: '#DBDBDB', flex: 1}}>
      <SearchView/>
        <View style={{ marginTop: 10 }}>
        <View style={{marginBottom: 15, marginLeft: 10}}>
          <Text style={{ fontSize: 25 }}>Burger</Text>
          <View style={{ width: 100, backgroundColor: '#000000', height: 3}}/>
        </View>
        <FlatList
        horizontal
          ItemSeparatorComponent={this.renderSeparator}
          data={this.props.burgers}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={item => item.Price}
        />
        </View>

        <View style={{ marginTop:10 }}>
        <View style={{marginBottom: 15, marginLeft: 10}}>
          <Text style={{ fontSize: 25 }}>Pizza</Text>
          <View style={{ width: 100, backgroundColor: '#000000', height: 3}}/>
        </View>
        <FlatList
        horizontal
          ItemSeparatorComponent={this.renderSeparator}
          data={this.props.pizzas}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={item => item.Price}
        />
        </View>

        <View style={{ marginTop:10 }}>
        <View style={{marginBottom: 15, marginLeft: 10}}>
          <Text style={{ fontSize: 25 }}>Pasta</Text>
          <View style={{ width: 100, backgroundColor: '#000000', height: 3}}/>
        </View>
        <FlatList
        horizontal
          ItemSeparatorComponent={this.renderSeparator}
          data={this.props.pastas}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={item => item.Price}
        />
        </View>
        <TouchableOpacity
        onPress={() => {
          this.setState({visible:true});
      }}
        style={{ alignSelf: 'center', marginTop: 20 }}
        >
        <Text style={{ fontSize: 18 }}>Cart</Text>
        </TouchableOpacity>

        <Modal isVisible={this.state.visible}
        backdropColor="#DBDBDB"
        backdropOpacity="1"
        style={{flex:0.5}}
        onBackdropPress={() => this.setState({visible:false})}
        >
         <View style={{ flex: 1 }}>
           <Text style={{marginBottom: 20, fontSize: 20, alignSelf: 'center'}}>Your Order Summary</Text>
           {this.props.item.map((child, index) => (
             <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
             <Text>{child.Name}</Text>
             <Text>{child.Price}</Text>
             </View>
           ))
           }

           <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}} >
           <Text>Total</Text>
           <Text>{this.props.totals}</Text>
           </View>

           <TouchableOpacity
           style={{alignSelf: 'center'}}
           onPress={()=>{
             if(applied == 0) {
             this.props.total(this.props.totals * 0.9);
             applied =1 ;
             Alert.alert("10% discount given");
           } else {
             Alert.alert("allowed only once");
           }
           }}
           >
           <Text>Apply coupon</Text>
           </TouchableOpacity>

         <TouchableOpacity
         style={{alignSelf: 'center'}}
         onPress={()=>Alert.alert("Your order will be delivered in x minutes")}
         >
         <Text>Confirm order</Text>
         </TouchableOpacity>
         </View>
       </Modal>

      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
      burgers: state.burgers,
      pizzas: state.pizzas,
      pastas: state.pastas,
      item: state.item,
      totals: state.total
  };
};

export default connect(mapStateToProps,actions)(Main);
