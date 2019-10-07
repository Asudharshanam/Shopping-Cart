import { PAYMENT_DETAILS_CHANGE } from '../actions/payment'

export const initialState = {
    paymentDetails: {
        firstName: "",
        lastName: "",
        cardNumber: "",
        expirationDate: "",
        cvc: ""
    }
}

export function Payment(state = initialState, action) {
    switch(action.type) {

        case PAYMENT_DETAILS_CHANGE: 
            return {
                ...state,
                paymentDetails: {
                    ...state.paymentDetails,
                    ...action.changedValue
                }
            }

            default:
                return state
    }
}

export default Payment