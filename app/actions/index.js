import { 
    TOGGLE_SETTINGS_MODAL,
    UPDATE_MAP_SETTINGS
 } from "./types";

export const toggleSettingsModal = () => {
    return {
      type: TOGGLE_SETTINGS_MODAL
    }
}

export const updateMapSettings = (payload) => {
    return {
      type: updateMapSettings,
      payload: payload
    }
}