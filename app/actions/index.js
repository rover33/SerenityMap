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
 } from "./types"
import axios from 'axios'

const BASE_URL = 'https://serenitymap.herokuapp.com/v1/api/'

export const toggleSettingsModal = () => {
    return {
      type: TOGGLE_SETTINGS_MODAL
    }
}

export const closeSettingsModal = () => {
    return {
        type: CLOSE_SETTINGS_MODAL
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

export const updateCity = (payload) => {
    console.log('updating city')
    return {
      type: UPDATE_CITY,
      payload: payload
    }
}

export const updateCurrentLocation = payload => {
    return {
      type: UPDATE_CURRENT_LOCATION,
      payload: payload
    }
}

export const updateMeetings = payload => {
    return {
      type: UPDATE_MEETINGS,
      payload: payload
    }
}

export const updateCities = payload => {
    for ( let i = 0, len = payload.length; i < len; i++) {
        payload[i] = {label: payload[i], value: payload[i], key: payload[i]}
    }
    return {
        type: UPDATE_CITIES,
        payload: payload
    }
}

export const searchForMeetings = (payload) => {
    console.log(payload)
    return dispatch => {
        axios
            .get(`${BASE_URL}meeting${payload}`)
            .then(response => {
                console.log(response)
                dispatch(updateMeetings(response.data.data))
            })
            .catch(error => {
                console.log(error.response)
            })
    }
}

export const getCities = (payload) => {
    return dispatch => {
        axios
            .get(`${BASE_URL}meeting/cities`)
            .then(response => {
                dispatch(updateCities(response.data.data))
            })
            .catch(error => {
                console.log(error.response)
            })
    }
}