import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Main from './JS/Main';
import Boot from './JS/Boot';
// first Scene is by default the first class loaded by react-native
class RouterComponent extends Component {
  render() {
    return (
      <Router hideNavBar>
        <Scene key="boot" component={Boot} />
        <Scene key="main" component={Main} />
      </Router>
          );
  }
}

export default RouterComponent;
