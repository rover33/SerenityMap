const INITIAL_STATE = {
    settingsModal: false,
    listModal: false,
    mapSettings: {
        trackUser: true
    },
    currentLocation: {},
    city: '',
    radius: 5,
    dayOfWeek: '',
    meetings: []
  };
  import {
    TOGGLE_SETTINGS_MODAL,
    UPDATE_MAP_SETTINGS,
    TOGGLE_LIST_MODAL,
    UPDATE_RADIUS,
    UPDATE_CURRENT_LOCATION,
    UPDATE_DAY,
    UPDATE_MEETINGS
  } from '../actions/types';
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case TOGGLE_SETTINGS_MODAL:
        return { ...state, settingsModal: !state.settingsModal }
        break
      case TOGGLE_LIST_MODAL:
        return { ...state, listModal: !state.listModal }
        break
      case UPDATE_MAP_SETTINGS:
        return { ...state, mapSettings: action.payload }
        break
      case UPDATE_RADIUS:
        return { ...state, radius: action.payload }
        break
      case UPDATE_CURRENT_LOCATION:
        return { ...state, currentLocation: action.payload }
        break
      case UPDATE_DAY:
        return { ...state, dayOfWeek: action.payload }
        break
      case UPDATE_MEETINGS:
        console.log('the meetings')
        console.log(action.payload)
        return { ...state, meetings: action.payload }
        break
      default:
        return state;
    }
  };
  