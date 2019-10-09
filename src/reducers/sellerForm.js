import { SELLER_FORM_DETAILS_CHANGE } from '../actions/sellerForm'

export const initialState= {
    sellerFormDetails: {
        itemTitle: "",
        itemDescription: "",
        itemImage: "",
        itemOverview: "",
        itemCost: "",
        sku: ""
    }
}

export function SellerForm(state = initialState, action) {
    switch(action.type) {

        case SELLER_FORM_DETAILS_CHANGE:
            return {
                ...state,
                sellerFormDetails: {
                    ...state.sellerFormDetails,
                    ...action.changedValue
                }
            }

        default:
            return state
    }
}

export default SellerForm