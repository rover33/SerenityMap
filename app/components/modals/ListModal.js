import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import {connect} from 'react-redux'
import { Picker } from 'react-native-picker-dropdown'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { SafeAreaView, Text, TouchableOpacity, Image, View, StyleSheet, ListView } from 'react-native'
 
class SettingsModal extends Component {
    constructor(props) {
        super(props)
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(props.meetings)
        }
    }
    
    _renderRow(meeting) {
        return <View style = {{
                                width: '100%', 
                                height: 'auto', 
                                flex: 0, 
                                padding: '5%',
                                borderBottomColor: '#40e0d0', 
                                borderBottomWidth: 1}}>
                    <Text style = {{fontFamily: 'DINPro-Bold'}}>{meeting.group_name}</Text>
                    <Text style = {{marginTop: 1}}>{`${meeting.day} ${meeting.time}`}</Text>
                    <Text style = {{marginTop: 1}}>{meeting.address}</Text>
                    <Text style = {{marginTop: 1}}>{meeting.city}</Text>
                </View>
    }

    render() {
       
        return (
            <SafeAreaView style = {styles.mainContainer}>
               <Text style = {{margin: 2, fontFamily: 'DINPro-Bold', fontSize: responsiveFontSize(3)}}> Meetings </Text>
                    <ListView
                        style = {{flex: 1, width: '100%'}}
                        automaticallyAdjustContentInsets={false}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this._renderRow(rowData)}
                    />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
	return {
        meetings: state.map.meetings
	};
};

export default connect(mapStateToProps, {  })(SettingsModal);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderLeftWidth: 2,
        borderLeftColor: '#40e0d0'
    }
})