import { StackNavigator } from 'react-navigation'
import React, { Component } from 'react'
import MapView from '../../views/MapView'

const RootStack = StackNavigator({
  Landing: {
    screen: MapView,
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