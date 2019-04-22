// set dialog value
export const set_toggle_form = ({commit}) => {
    return commit('set_toggle_form')
}

// get all stations in database
export const set_stations = ({commit}) => {
    return new Promise((resolve, reject) => {
        axios.get('api/stations').then(response => {
            // http success, call the mutator and change something in state
            commit('set_all_stations', response.data.data)
            resolve(response);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            console.log(error.response)
            // http failed, let the calling function know that action did not work out
            reject(error);
        })
    })
}

// add new station to the database
export const add_new_station = ({dispatch}, station) => {
    return axios.post('api/stations',station) .then( response => {
            dispatch('set_message',{message:response.data.message, type:'success'},{root:true})
            dispatch('set_stations')
        }).catch(error => {
           dispatch('set_message',{message:error.response.data.message, type:'error'},{root:true})
        });
}

// set edit station array
export const set_edit_station = ({commit}, station={}) => {
    return commit('set_update_station_to_form',station)
}

// update existing station in database
export const update_station = ({dispatch}, station) => {
    return new Promise((resolve, reject) => {
        axios.post('api/stations/update',station).then(response => {
            // http success, call the mutator and change something in state
            dispatch('set_stations')
            dispatch('set_message',{message:response.data.message, type:'success'},{root:true})
            resolve(response);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            // http failed, let the calling function know that action did not work out
            dispatch('set_message',{message:error.response.data.message, type:'error'},{root:true})
            reject(error);
        })
    })
}

// set station details
export const set_station_details = ({commit}, id) => {
    return new Promise((resolve, reject) => {
        axios.get('api/stations/'+id).then(response => {
            // http success, call the mutator and change something in state
            commit('set_active_station',response.data.station)
            resolve(response);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            // http failed, let the calling function know that action did not work out
            dispatch('set_message',{message:error.response.data.message, type:'error'},{root:true})
            reject(error);
        })
    })
}

// delete station to the database
export const delete_stations = ({dispatch}, id) => {
    return new Promise((resolve, reject) => {
        axios.delete(`api/stations/${id}`).then(response => {
            // http success, call the get all data and change something in station
            dispatch('set_stations')
            dispatch('set_message',{message:response.data.message, type:'success'},{root:true})
            resolve(response);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            // http failed, let the calling function know that action did not work out
            dispatch('set_message',{message:error.response.data.message, type:'error'},{root:true})
            reject(error);
        })
    })
}