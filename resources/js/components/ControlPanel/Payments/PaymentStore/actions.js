// set dialog value
export const set_toggle_form = ({commit}) => {
    return commit('set_toggle_form')
}

// get all payments in database
export const set_payments = ({commit}) => {
    return new Promise((resolve, reject) => {
        axios.get('api/payments').then(response => {
            // http success, call the mutator and change something in state
            commit('set_all_payments', response.data.data)
            resolve(response);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            console.log(error.response)
            // http failed, let the calling function know that action did not work out
            reject(error);
        })
    })
}

// add new payment to the database
export const add_new_payment = ({dispatch}, payment) => {
    return axios.post('api/payments',payment) .then( response => {
            dispatch('set_message',{message:response.data.message, type:'success'},{root:true})
            dispatch('set_payments')
        }).catch(error => {
            dispatch('set_message',{message:error.response.data.message, type:'error'},{root:true})
        });
}

// set edit payment array
export const set_edit_payment = ({commit}, payment={}) => {
    return commit('set_update_payment_to_form',payment)
}

// update existing payment in database
export const update_payment = ({dispatch}, payment) => {
    return new Promise((resolve, reject) => {
        axios.put(`api/subscriptions/${payment.id}`,payment).then(response => {
            // http success, call the mutator and change something in state
            dispatch('set_payments')
            dispatch('set_message',{message:response.data.message, type:'success'},{root:true})
            resolve(response);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            // http failed, let the calling function know that action did not work out
            dispatch('set_message',{message:error.response.data.message, type:'error'},{root:true})
            reject(error);
        })
    })
}

// set payment details
export const set_payment_details = ({commit}, id) => {
    return new Promise((resolve, reject) => {
        axios.get('api/payments/'+id).then(response => {
            // http success, call the mutator and change something in state
            commit('set_active_payment',response.data.payment)
            resolve(response);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            // http failed, let the calling function know that action did not work out
            dispatch('set_message',{message:error.response.data.message, type:'error'},{root:true})
            reject(error);
        })
    })
}

// delete payment to the database
export const delete_payments = ({dispatch}, id) => {
    return new Promise((resolve, reject) => {
        axios.delete(`api/payments/${id}`).then(response => {
            // http success, call the get all data and change something in payment
            dispatch('set_payments')
            dispatch('set_message',{message:response.data.message, type:'success'},{root:true})
            resolve(response);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            // http failed, let the calling function know that action did not work out
            dispatch('set_message',{message:error.response.data.message, type:'error'},{root:true})
            reject(error);
        })
    })
}