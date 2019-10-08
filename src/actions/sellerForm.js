export const SELLER_FORM_DETAILS_CHANGE = "SELLER_FORM_DETAILS_CHANGE"
export function sellerFormDetailsChange(changedValue) {
    return {
        type: SELLER_FORM_DETAILS_CHANGE,
        changedValue
    }
}