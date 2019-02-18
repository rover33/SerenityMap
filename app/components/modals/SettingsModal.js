import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import {connect} from 'react-redux'
import { Picker } from 'react-native-picker-dropdown'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { SafeAreaView, Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { getCities, 
        searchForMeetings, 
        updateDay, 
        updateCity,
        closeSettingsModal,
        toggleSettingsModal } from '../../actions'
 
class SettingsModal extends Component {
    constructor(props) {
        super(props)
        this.props.getCities()
        
    }
    state = {
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

    updateDay(value) {
        this.props.updateDay(value)
    }

    updateCity(value) {
        this.props.updateCity(value)
    }

    closeModal() {
        this.props.closeSettingsModal()
    }

    submitSearch() {
        let { dayOfWeek, city } = this.props
        let payload = '?'
        if (dayOfWeek != '') payload += `&day=${dayOfWeek}`
        if (city != '') payload += `&city=${city}`
        this.props.searchForMeetings(payload)
        this.closeModal()
    }
   
    render() {
        return (
            <SafeAreaView style = {styles.mainContainer}>
               <Text style = {{margin: 2, fontFamily: 'DINPro-Bold', fontSize: responsiveFontSize(3)}}>Settings</Text>
               <View style={styles.pickerContainer}>
                    <Text style={{fontFamily: 'DINPro-Regular', marginBottom: '3%'}}>Select a city.</Text>
                    <RNPickerSelect
                            placeholder={{label: "City"}}
                            items={this.props.cities}
                            style={pickerSelectStyles}
                            onValueChange={(value) => { this.updateCity(value) }}
                            value={this.props.city}
                        />
                </View>
                <View style={styles.pickerContainer}>
                    <Text style={{fontFamily: 'DINPro-Regular', marginBottom: '3%'}}>Select a day.</Text>
                    <RNPickerSelect
                        placeholder={{label: "Day"}}
                        items={this.props.daysOfTheWeek}
                        style={pickerSelectStyles}
                        onValueChange={(value) => { this.updateDay(value) }}
                        value={this.props.dayOfWeek}
                    />
                </View>
                <View style={styles.pickerContainer}>
                    <TouchableOpacity style = {styles.searchButton} onPress = {() => this.submitSearch()}>
                        <Text style = {styles.searchButtonText}>
                            SEARCH
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pickerContainer}>
                    <TouchableOpacity style = {styles.cancelButton} onPress = {() => this.props.closeMe()}>
                        <Text style = {styles.cancelButtonText}>
                            CANCEL
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
	return {
        currentLocation: state.map.currentLocation,
        dayOfWeek: state.map.dayOfWeek,
        daysOfTheWeek: state.map.daysOfTheWeek,
        cities: state.map.cities,
        city: state.map.city,
        meetings: state.map.meetings
	};
};

export default connect(mapStateToProps, { getCities, 
                                          searchForMeetings, 
                                          updateDay,
                                          updateCity,
                                          closeSettingsModal,
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
        width: '100%',
        height: 50,
        borderColor: '#40e0d0',
        borderWidth: 2,
        borderRadius: 4,
        flex: 0,
        marginTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchButtonText: {
        color: '#40e0d0',
        fontSize: responsiveFontSize(2),
        fontFamily: 'DINPro-Bold'
    },
    cancelButton: {
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 4,
        flex: 0,
        marginTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: 'gray',
        fontSize: responsiveFontSize(2),
        fontFamily: 'DINPro-Bold'
    },
    settingsText: {
        color: '#40e0d0',
        fontSize: responsiveFontSize(2),
        fontFamily: 'DINPro-Bold'
    },
    pickerContainer: {
        flex: 0,
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%'
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});