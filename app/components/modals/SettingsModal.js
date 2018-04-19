import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import {connect} from 'react-redux'
import { Picker } from 'react-native-picker-dropdown'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { SafeAreaView, Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native'
import { updateRadius, searchForMeetings, updateDay, toggleSettingsModal } from '../../actions'
 
class SettingsModal extends Component {
    constructor(props) {
        super(props)
    
    }
    state = {
        radiusTypes: [
                        {label: '1 mi.', value: 1},
                        {label: '5 mi.', value: 5}, 
                        {label: '15 mi.', value: 15}, 
                        {label: '30 mi.', value: 30}, 
                        {label: '100 mi.', value: 100}
        ],
        daysOfTheWeek: [
                        {label: 'Sunday', value: 'Sunday'},
                        {label: 'Monday', value: 'Monday'},
                        {label: 'Tuesday', value: 'Tuesday'},
                        {label: 'Wednesday', value: 'Wednesday'},
                        {label: 'Thursday', value: 'Thursday'},
                        {label: 'Friday', value: 'Friday'},
                        {label: 'Saturday', value: 'Saturday'},
        ]
    }

    updateRadiusRadio(value) {
        this.props.updateRadius(value)
    }

    updateDay(value) {
        this.props.updateDay(value)
    }

    submitSearch() {
        let { radius, currentLocation, dayOfWeek } = this.props
        /*----- remove after testing ------*/
        currentLocation = {
            latitude: 39.600253,
            longitude: -104.907313,
        }
        /*---------------------------------*/
        let payload = `?distance=${radius}&lon=${currentLocation.longitude}&lat=${currentLocation.latitude}`
        if (dayOfWeek && dayOfWeek !== '') payload += `&day=${dayOfWeek}`
        this.props.searchForMeetings(payload)
        setTimeout(() => {
            this.props.closeMe()
        }, 1000)
    }
   
    render() {
        return (
            <SafeAreaView style = {styles.mainContainer}>
               <Text style = {styles.settingsText}>Settings</Text>
               <RadioForm
                    radio_props={this.state.radiusTypes}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={false}
                    buttonColor={'#40e0d0'}
                    animation={true}
                    onPress={(value) => {this.updateRadiusRadio(value)}}
                />
                <RadioForm
                    radio_props={this.state.daysOfTheWeek}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={false}
                    buttonColor={'#40e0d0'}
                    animation={true}
                    onPress={(value) => {this.updateDay(value)}}
                />
                <TouchableOpacity style = {styles.searchButton} onPress = {() => this.submitSearch()}>
                    <Text style = {styles.searchButtonText}>
                        SEARCH
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
	return {
        radius: state.map.radius,
        currentLocation: state.map.currentLocation,
        dayOfWeek: state.map.dayOfWeek
	};
};

export default connect(mapStateToProps, { updateRadius, 
                                          searchForMeetings, 
                                          updateDay,
                                          toggleSettingsModal })(SettingsModal);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRightWidth: 2,
        borderRightColor: '#40e0d0'
    },
    searchButton: {
        width: '80%',
        height: '5%',
        borderColor: '#40e0d0',
        borderWidth: 2,
        borderRadius: 4,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20
    },
    searchButtonText: {
        color: '#40e0d0',
        fontSize: responsiveFontSize(2),
        fontFamily: 'DINPro-Bold'
    },
    settingsText: {
        color: '#40e0d0',
        fontSize: responsiveFontSize(2),
        fontFamily: 'DINPro-Bold'
    }
})