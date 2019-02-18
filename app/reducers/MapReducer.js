const INITIAL_STATE = {
    settingsModal: false,
    listModal: false,
    mapSettings: {
        trackUser: true
    },
    currentLocation: {},
    city: '',
    daysOfTheWeek: [
      {label: 'Sunday', value: 'Sunday', key: 'Sunday'},
      {label: 'Monday', value: 'Monday', key: 'Monday'},
      {label: 'Tuesday', value: 'Tuesday', key: 'Tuesday'},
      {label: 'Wednesday', value: 'Wednesday', key: 'Wednesday'},
      {label: 'Thursday', value: 'Thursday', key: 'Thursday'},
      {label: 'Friday', value: 'Friday', key: 'Friday'},
      {label: 'Saturday', value: 'Saturday', key: 'Saturday'}
    ],
    dayOfWeek: '',
    meetings: [],
    cities: []
  };
  import {
    TOGGLE_SETTINGS_MODAL,
    UPDATE_MAP_SETTINGS,
    TOGGLE_LIST_MODAL,
    UPDATE_RADIUS,
    UPDATE_CURRENT_LOCATION,
    UPDATE_DAY,
    UPDATE_MEETINGS,
    UPDATE_CITIES,
    UPDATE_CITY,
    CLOSE_SETTINGS_MODAL
  } from '../actions/types';
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case TOGGLE_SETTINGS_MODAL:
        return { ...state, settingsModal: !state.settingsModal }
        break
      case  CLOSE_SETTINGS_MODAL:
        return { ...state, settingsModal: false }
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
        return { ...state, meetings: action.payload }
        break
      case UPDATE_CITIES:
        return { ...state, cities: action.payload}
        break
      case UPDATE_CITY:
        return { ...state, city: action.payload } 
        break
      default:
        return state;
    }
  };
  