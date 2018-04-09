import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import {connect} from 'react-redux'
import { Picker } from 'react-native-picker-dropdown'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { SafeAreaView, Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native'
import { toggleSettingsModal } from '../../actions'
 
class SettingsModal extends Component {
    constructor(props) {
        super(props)
    
    }
    state = {
      
    }
   
    render() {
       
        return (
            <SafeAreaView style = {styles.mainContainer}>
                <View style = {styles.headerContainer}>
                   
                </View>
                <View style = {styles.contentContainer}>
                    
                    
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
	return {
	};
};

export default connect(mapStateToProps, { toggleSettingsModal })(SettingsModal);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'rgb(42,42,42)',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleText: {
        color: '#fff'
    },
    imagestyle: {
        height: 30,
        width: 30
    },
    headerContainer: {
        width: '100%',
        height: 64,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomColor: 'rgb(87,89,107)',
        borderBottomWidth: 0.5,
        backgroundColor: 'rgb(42,42,42)'
    },
    headerText: {
        fontSize: responsiveFontSize(4),
        color: '#fff',
        fontFamily: 'BurbankBigCondensed-Bold',
        letterSpacing: 0.6,
        alignSelf: 'center'
    },
    contentContainer: {
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'rgb(63,65,73)'
    },
    cancelText: {
        color: '#fff',
        fontSize: responsiveFontSize(1.8),
    },
    cancelButton: {
        width: '20%',
        position: 'absolute',
        left: 5,
        padding: 10
    },
    clearButton: {
        height: 30,
        width: 51,
        position: 'absolute',
        right: 15,
        borderWidth: 1,
        borderColor: 'rgb(63,65,73)',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    clearButtonWhite: {
        height: 30,
        width: 51,
        position: 'absolute',
        right: 15,
        borderWidth: 1,
        borderColor: '#fff',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    clearText: {
        color: 'rgb(63,65,73)',
        fontSize: 13,
        lineHeight: 15,
    },
    subHeadText: {
        fontSize: responsiveFontSize(2),
        color: 'rgb(87,89,107)',
        marginTop: 30
    },
    platformSelectContainer: {
        flex: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 220,
        marginTop: 10
    },
    picker: {
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#fff',
        width: 290,
        height: 50
    },
    pickerText: {
        color: 'rgb(42,42,42)',
        fontSize: responsiveFontSize(2),
        fontFamily: 'BurbankBigCondensed-Bold'
    },
    platformImageContainer: {
        width: 60,
        height: 60
    },
    messageInput: {
        width: 290,
        height: 120,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(159,163,194,1)',
        marginTop: 20,
        padding: 15
    },
    messageInputText: {
        color: 'rgb(159,163,194)',
        fontSize: 13,
        lineHeight: 16
    },
    letterCount: {
        width: 290,
        textAlign: 'right',
        color: 'rgb(87,89,107)',
        lineHeight: 12,
        fontSize: 12,
        marginTop: 6
    },
    micContainer: {
        flex: 0,
        flexDirection: 'row',
        width: 140,
        justifyContent: 'space-between',
        marginTop: 10
    },
    listPlayerButton: {
        backgroundColor: 'rgb(184,119,211)'
    },
    unselectedButton : {
        backgroundColor: 'rgb(159,163,194)'
    },
    buttonContainer: {
        width: 290,
        marginTop: 85
    }
})