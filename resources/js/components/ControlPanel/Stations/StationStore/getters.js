import state from "./state";

// get dialog value
export const getStationForm = (state) => {
    return state.dialog
}

// get all Stations array
export const getAllStations = (state) => {
    return state.allStations
}

// get edit Station
export const getEditStation = (state) => {
    return state.editStation
}