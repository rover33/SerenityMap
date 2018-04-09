import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import {connect} from 'react-redux'
import { Picker } from 'react-native-picker-dropdown'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { SafeAreaView, Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native'
 
class SettingsModal extends Component {
    constructor(props) {
        super(props)
    
    }
    state = {
      
    }
   
    render() {
       
        return (
            <SafeAreaView style = {styles.mainContainer}>
               <Text> List Modal </Text>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
	return {
	};
};

export default connect(mapStateToProps, {  })(SettingsModal);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})