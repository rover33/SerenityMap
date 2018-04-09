import React, { Component } from 'react'
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {
  setCustomTextInput,
  setCustomText,
} from 'react-native-global-props';
import {createStore, applyMiddleware} from 'redux'
import RootNav from './config/navigators/RootNavigator'
import reducers from './reducers'

const customTextProps = { 
  style: { 
    
  }
}
 
export default class App extends Component {
    constructor(props) {
        super(props)
        console.disableYellowBox = true
        //setCustomText(customTextProps);
        //setCustomTextInput(customTextProps);
    }
    render() {
        return (
            <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <RootNav />
            </Provider>
        );
    }
}