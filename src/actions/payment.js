export const PAYMENT_DETAILS_CHANGE = "PAYMENT_DETAILS_CHANGE"
export function paymentDetailsChange(changedValue) {
    return {
        type: PAYMENT_DETAILS_CHANGE,
        changedValue
    }
}

export const VALIDATE_PAYMENT_FORM_FIELDS = "VALIDATE_PAYMENT_FORM_FIELDS"
export function validatePaymentFormFields(fieldName, fieldValue) {
    return {
        type: VALIDATE_PAYMENT_FORM_FIELDS,
        fieldName,
        fieldValue
    }
}