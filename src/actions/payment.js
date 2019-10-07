export const PAYMENT_DETAILS_CHANGE = "PAYMENT_DETAILS_CHANGE"
export function paymentDetailsChange(changedValue) {
    return {
        type: PAYMENT_DETAILS_CHANGE,
        changedValue
    }
}