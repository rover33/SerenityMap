import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE }  from 'react-native-maps';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { SafeAreaView, Text, View, StatusBar, StyleSheet, AsyncStorage } from 'react-native';

class LandingMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style ={styles.container}>
        <MapView
          showsUserLocation={true}
          followsUserLocation={true}
          style={styles.map}
          region={{
            latitude: 104.9903,
            longitude: 39.7392,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        ></MapView>
        <View style = {styles.footer}>
          <Text style = {styles.title}>
            Serenity Map
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    mapSettings: state.map.mapSettings
  };
};

export default connect(mapStateToProps, {  })(LandingMap);

const styles = StyleSheet.create({
  mainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around'
  },
  container: {
      ...StyleSheet.absoluteFillObject,
      height: null,
      width: null,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
  },
  map: {
      ...StyleSheet.absoluteFillObject,
  },
  footer: {
      width: '100%',
      height: '10%',
      backgroundColor: '#40e0d0',
      position: 'absolute',
      bottom: 0,
      zIndex: 9999,
      borderTopWidth: 5,
      borderTopColor: '#fff',
      flex: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
  },
  title: {
    color: '#fff',
    fontSize: responsiveFontSize(3),
    fontFamily: 'DINPro-Bold'
  }
});
