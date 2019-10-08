import { ADD_TO_CART, UPDATE_CART } from '../actions/itemListCards'

export const initialState = {
    selectedItem: {}
}

export function ItemListCards(state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART:

            let mutipleItemsWithId = { [action.itemDetails.itemId]: action.itemDetails }
            return {
                ...state,
                selectedItem: {
                    ...state.selectedItem,
                    ...mutipleItemsWithId
                },
                totalAmount: getTotalAmount(state.selectedItem)
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

export function getTotalAmount(selectedItem) {
    let content = Object.values(selectedItem)
    if (content.length) {
        let getCost = content.map(item => item.itemCost.replace(/\$/g, ''))
        let getArrayOfNumbers = getCost.map(Number)
        let totalCost = getArrayOfNumbers.reduce((a, b) => a + b)
        return totalCost
    }
}

export default ItemListCards