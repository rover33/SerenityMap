import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE }  from 'react-native-maps';
import { withNavigation } from 'react-navigation';
import ModalWrapper from 'react-native-modal-wrapper';
import { connect } from 'react-redux';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { SafeAreaView, Text, View, StatusBar, StyleSheet, AsyncStorage, Image, TouchableOpacity } from 'react-native';
import { toggleSettingsModal, toggleListModal } from '../actions'
import SettingsModal from '../components/modals/SettingsModal'
import ListModal from '../components/modals/ListModal'

class LandingMap extends Component {
  constructor(props) {
    super(props);
  }

  toggleSearch() {
    this.props.toggleSettingsModal()
  }

  toggleList() {
    this.props.toggleListModal()
  }

  render() {
    let { settingsModal, listModal } = this.props
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
          <TouchableOpacity onPress = {() => this.toggleSearch()} style = {styles.buttonContainer}>
            <Image style = {styles.button} source = {require('../../assets/search.png')} />
          </TouchableOpacity>
          <Text style = {styles.title}>
            Serenity Maps
          </Text>
          <TouchableOpacity onPress = {() => this.toggleList()} style = {styles.buttonContainer}>
            <Image style = {styles.button} source = {require('../../assets/note.png')} />
          </TouchableOpacity>
        </View>
        <ModalWrapper
            onRequestClose={this.toggleSearch.bind(this)}
            position="left"
            style={{ width: '70%', height: '100%', position: 'absolute', left: 0}}
            visible={settingsModal}>
            <SettingsModal />
        </ModalWrapper>
        <ModalWrapper
            onRequestClose={this.toggleList.bind(this)}
            position="right"
            style={{ width: '70%', height: '100%', position: 'absolute', right: 0}}
            visible={listModal}>
          <ListModal />
        </ModalWrapper>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    mapSettings: state.map.mapSettings,
    settingsModal: state.map.settingsModal,
    listModal: state.map.listModal
  };
};

export default connect(mapStateToProps, { toggleSettingsModal, toggleListModal })(LandingMap);

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
  },
  button: {
    height: '100%',
    width: '100%',
    zIndex: 1000000,
    resizeMode: 'contain',
  },
  buttonContainer: {
    height: '50%',
    width: '15%',
  }
});
