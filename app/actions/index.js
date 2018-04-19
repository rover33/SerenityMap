import { 
    TOGGLE_SETTINGS_MODAL,
    UPDATE_MAP_SETTINGS,
    TOGGLE_LIST_MODAL,
    UPDATE_RADIUS,
    UPDATE_CURRENT_LOCATION,
    UPDATE_DAY,
    UPDATE_MEETINGS
 } from "./types"
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/v1/api/'

export const toggleSettingsModal = () => {
    return {
      type: TOGGLE_SETTINGS_MODAL
    }
}

export const updateDay = (payload) => {
    return {
      type: UPDATE_DAY,
      payload: payload
    }
}

export const toggleListModal = () => {
    return {
      type: TOGGLE_LIST_MODAL
    }
}

export const updateMapSettings = (payload) => {
    return {
      type: UPDATE_MAP_SETTINGS,
      payload: payload
    }
}

export const updateRadius = (payload) => {
    return {
      type: UPDATE_RADIUS,
      payload: payload
    }
}

export const updateCurrentLocation = (payload) => {
    return {
      type: UPDATE_CURRENT_LOCATION,
      payload: payload
    }
}

export const updateMeetings = (payload) => {
    return {
      type: UPDATE_MEETINGS,
      payload: payload
    }
}

export const searchForMeetings = (payload) => {
    return dispatch => {
        axios
            .get(`${BASE_URL}meeting${payload}`)
            .then(response => {
                dispatch(updateMeetings(response.data.data))
            })
            .catch(error => {
                console.log(error.response)
            })
    }
  }