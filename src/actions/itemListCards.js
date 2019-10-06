export const ADD_TO_CART = "ADD_TO_CART"
export function addToCart(itemDetails) {
    return {
        type: ADD_TO_CART,
        itemDetails
    }
}

export const UPDATE_CART = "UPDATE_CART"
export function updateCart(updatedCartItems) {
    return {
        type: UPDATE_CART,
        updatedCartItems
    }
}