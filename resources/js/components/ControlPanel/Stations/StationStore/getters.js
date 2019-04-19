import state from "./state";

// get all Stations array
export const getAllStations = (state) => {
    return state.allStations
}

// get edit Station
export const getEditStation = (state) => {
    return state.editStation
}