import React, { Component, Alert } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker }  from 'react-native-maps';
import { withNavigation } from 'react-navigation';
import ModalWrapper from 'react-native-modal-wrapper';
import { connect } from 'react-redux';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { SafeAreaView, Text, View, StatusBar, StyleSheet, AsyncStorage, Image, TouchableOpacity } from 'react-native';
import { toggleSettingsModal, toggleListModal, updateCurrentLocation, getCities, searchForMeetings } from '../actions'
import SettingsModal from '../components/modals/SettingsModal'
import ListModal from '../components/modals/ListModal'

class LandingMap extends Component {
  constructor(props) {
    super(props);
    this.props.getCities();
    this.props.searchForMeetings('?')
  }

  componentDidMount() {
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
          console.log(region)
          this.props.updateCurrentLocation(region)
        },
        (error) => {
          //TODO: better design
          switch (error.code) {
            case 1:
              if (Platform.OS === "ios") {
                alert("", "No location permission");
              } else {
                alert("", "No location permission");
              }
              break;
            default:
              alert("", "Error detecting location");
          }
        }
      );
    } catch(e) {
      alert(e.message || "");
    }
  };

  toggleSearch() {
    this.props.toggleSettingsModal()
  }

  toggleList() {
    this.props.toggleListModal()
  }

  _markerDesc(marker) {
    return `${marker.address} ${marker.day} ${marker.time}`
  }

  render() {
    let { settingsModal, listModal, radius } = this.props
    return (
      <SafeAreaView style ={styles.container}>
        <MapView
          showsUserLocation={true}
          followsUserLocation={true}
          style={styles.map}
          zoomEnabled={true}
          region={{
            latitude: 104.9903,
            longitude: 39.7392,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {this.props.meetings.map(marker => (
            <Marker
              key={marker._id}
              coordinate={{longitude: marker.loc[0], latitude: marker.loc[1]}}
              title={marker.group_name}
              image={require('../../assets/locationicon.png')}
              description={this._markerDesc(marker)}
            />
          ))}
        </MapView>
        <View style = {styles.radiusCircle}>
          <Text style = {styles.radiusText}> {this.props.city || 'All'} </Text>
        </View>
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
            onRequestClose={() => console.log('closed')}
            position="left"
            style={{ width: '100%', height: '100%', position: 'absolute', left: 0}}
            visible={settingsModal}>
            <SettingsModal closeMe={this.props.toggleSettingsModal}/>
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
    listModal: state.map.listModal,
    radius: state.map.radius,
    meetings: state.map.meetings,
    city: state.map.city
  };
};

export default connect(mapStateToProps, { toggleSettingsModal, 
                                          toggleListModal, 
                                          updateCurrentLocation, 
                                          searchForMeetings,
                                          getCities })(LandingMap);

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
    fontSize: responsiveFontSize(2),
    fontFamily: 'DINPro-Bold'
  },
  radiusText: {
    color: '#fff',
    fontSize: responsiveFontSize(1),
    fontFamily: 'DINPro-Bold'
  },
  button: {
    height: '100%',
    width: '100%',
    zIndex: 1000000,
    resizeMode: 'contain',
  },
  buttonContainer: {
    height: '40%',
    width: '15%',
  },
  radiusCircle: {
    height: 26,
    width: 'auto',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#40e0d0',
    position: 'absolute',
    top: '5%',
    left: '5%',
    flex: 0,
    padding: '4%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
