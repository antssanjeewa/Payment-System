// set all payments to the allpayments Array
export const set_all_payments = (state, payments) => {
    return state.allPayments = payments
}

// set update payment to form
export const set_update_payment_to_form = (state, payment) => {
    return state.editPayment = payment
}

// set active payment information
export const set_active_payment = (state, payment) => {
    //console.log(state.allpayments.find( item => item.id === payment.id ) )
    return state.activePayment = payment
}
