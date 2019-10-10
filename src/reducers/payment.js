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
    cardTypeEntered: "",
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
                cardTypeEntered: getCardType(action.changedValue)
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

export function getCardType(data) {

    let ccNum = data.cardNumber
    let visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    let mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    let amexpRegEx = /^(?:3[47][0-9]{13})$/;
    let discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    if (visaRegEx.test(ccNum)) {
        return "visa"
    } else if (mastercardRegEx.test(ccNum)) {
        return "masterCard"
    } else if (amexpRegEx.test(ccNum)) {
        return "americanExpress"
    } else if (discovRegEx.test(ccNum)) {
        return "discover"
    }
}

export default Payment