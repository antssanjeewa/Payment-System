export const set_toggle_form = (state) => {
    return state.dialog = !state.dialog
}

// set all stations to the allstations Array
export const set_all_stations = (state, stations) => {
    return state.allStations = stations
}

// set update station to form
export const set_update_station_to_form = (state, station) => {
    return state.editStation = station
}

// set active station information
export const set_active_station = (state, station) => {
    //console.log(state.allstations.find( item => item.id === station.id ) )
    return state.activeStation = station
}
