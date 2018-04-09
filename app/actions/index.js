import { 
    TOGGLE_SETTINGS_MODAL,
    UPDATE_MAP_SETTINGS,
    TOGGLE_LIST_MODAL
 } from "./types";

export const toggleSettingsModal = () => {
    return {
      type: TOGGLE_SETTINGS_MODAL
    }
}

export const toggleListModal = () => {
    return {
      type: TOGGLE_LIST_MODAL
    }
}

export const updateMapSettings = (payload) => {
    return {
      type: updateMapSettings,
      payload: payload
    }
}