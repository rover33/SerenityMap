import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { SafeAreaView, Text, View, StatusBar, StyleSheet, AsyncStorage } from 'react-native';

class MapView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar backgroundColor="transparent" barStyle="light-content" />
        
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, {  })(MapView);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgb(42,42,42)',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
