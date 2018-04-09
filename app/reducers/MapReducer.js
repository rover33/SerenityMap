const INITIAL_STATE = {
    settingsModal: false,
    mapSettings: {
        trackUser: true
    },
    city: ''
  };
  import {
    TOGGLE_SETTINGS_MODAL,
    UPDATE_MAP_SETTINGS
  } from '../actions/types';
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case TOGGLE_SETTINGS_MODAL:
        return { ...state, settingsModal: !state.settingsModal }
        break
      case UPDATE_MAP_SETTINGS:
        return { ...state, mapSettings: payload }
        break
      default:
        return state;
    }
  };
  