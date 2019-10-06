import { ADD_TO_CART, UPDATE_CART } from '../actions/itemListCards'

export const initialState = {
    selectedItem: {}
}

export function ItemListCards(state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART:
            
            let mutipleItemsWithId = {[action.itemDetails.itemId]: action.itemDetails}
            return {
                ...state,
                selectedItem: {
                    ...state.selectedItem,
                    ...mutipleItemsWithId
                }
            }

        case UPDATE_CART:
            return {
                ...state,
                selectedItem: action.updatedCartItems
            }

        default:
            return state
    }
}

export default ItemListCards