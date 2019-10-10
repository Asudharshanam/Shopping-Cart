import { PAYMENT_DETAILS_CHANGE, VALIDATE_PAYMENT_FORM_FIELDS } from '../actions/payment'
import { validate } from '../utils/sharedUtils';

export const initialState = {
    paymentDetails: {
        firstName: "",
        lastName: "",
        cardNumber: "",
        expirationDate: "",
        cvc: ""
    },
    errorMessage: {}
}

export const ruleSet = {
    firstName: ["required", "min:3"],
    lastName: ["required", "min:3"],
    cardNumber: ["required", "max:16"],
    expirationDate: ["required", "max:5", "validDate"],
    cvc: ["required", "max:3"],
}

export function Payment(state = initialState, action) {
    switch (action.type) {

        case PAYMENT_DETAILS_CHANGE:
            return {
                ...state,
                paymentDetails: {
                    ...state.paymentDetails,
                    ...action.changedValue
                },
            }

        case VALIDATE_PAYMENT_FORM_FIELDS:
            return {
                ...state,
                errorMessage: {
                    ...state.errorMessage,
                    [action.fieldName]: validate(
                        ruleSet[[action.fieldName]],
                        action.fieldValue,
                        "This"
                    )
                }
            }

        default:
            return state
    }
}

export default Payment