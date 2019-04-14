// get all childrens in database
export const set_childrens = ({commit}) => {
    return new Promise((resolve, reject) => {
        axios.get('api/childrens').then(response => {
            // http success, call the mutator and change something in state
            commit('set_all_childrens', response.data.data)
            resolve(response);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            console.log(error.response)
            // http failed, let the calling function know that action did not work out
            reject(error);
            console.log("kkk")
        })
    })
}

// add new children to the database
export const add_new_children = ({dispatch}, children) => {
    return axios.post('api/childrens',children) .then( response => {
            dispatch('set_message',{message:response.data.message, type:'success'},{root:true})
            dispatch('set_childrens')
            console.log("kkk")
            console.log(response)
        }).catch(error => {
            console.log(error.response)
            dispatch('set_message',{message:error.response.data.message, type:'error'},{root:true})
        });
}

// set edit children array
export const set_edit_children = ({commit}, children={}) => {

    return commit('set_update_children_to_form',children)
}

// update existing children in database
export const update_children = ({dispatch}, children) => {
    return new Promise((resolve, reject) => {
        axios.post('api/childrens/update',children).then(response => {
            // http success, call the mutator and change something in state
            dispatch('set_childrens')
            dispatch('set_message',{message:response.data.message, type:'success'},{root:true})
            resolve(response);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            // http failed, let the calling function know that action did not work out
            dispatch('set_message',{message:error.response.data.message, type:'error'},{root:true})
            reject(error);
        })
    })
}

// set children details
export const set_children_details = ({commit}, id) => {
    return new Promise((resolve, reject) => {
        axios.get('api/childrens/'+id).then(response => {
            // http success, call the mutator and change something in state
            commit('set_active_children',response.data.children)
            resolve(response);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            // http failed, let the calling function know that action did not work out
            dispatch('set_message',{message:error.response.data.message, type:'error'},{root:true})
            reject(error);
        })
    })
}