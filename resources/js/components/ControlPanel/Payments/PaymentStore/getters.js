import state from "./state";

// get dialog value
export const getPaymentForm = (state) => {
    return state.dialog
}

// get all payments array
export const getAllPayments = (state) => {
    return state.allPayments
}

// get edit payment
export const getEditPayment = (state) => {
    return state.editPayment
}