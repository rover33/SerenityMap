const INITIAL_STATE = {
    settingsModal: false,
    listModal: false,
    mapSettings: {
        trackUser: true
    },
    city: ''
  };
  import {
    TOGGLE_SETTINGS_MODAL,
    UPDATE_MAP_SETTINGS,
    TOGGLE_LIST_MODAL
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
        return { ...state, mapSettings: payload }
        break
      default:
        return state;
    }
  };
  