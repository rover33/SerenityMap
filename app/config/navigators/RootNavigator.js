import { StackNavigator } from 'react-navigation'
import React, { Component } from 'react'
import LandingMap from '../../views/LandingMap'

const RootStack = StackNavigator({
  Landing: {
    screen: LandingMap,
  }
},
{ 
  headerMode: 'none', 
},
);


export default class RootNav extends Component {
  render() {
    return <RootStack />;
  }
}