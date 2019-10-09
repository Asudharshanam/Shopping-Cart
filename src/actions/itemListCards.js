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

export const FETCH_ITEMS_LIST_SUCCESS = "FETCH_ITEMS_LIST_SUCCESS"
export function fetchItemsListSuccess(list) {
    return {
        type: FETCH_ITEMS_LIST_SUCCESS,
        list
    }
}

export const FETCH_ITEMS_LIST_FAILED = "FETCH_ITEMS_LIST_FAILED"
export function fetchItemsListFailed(error) {
    return {
        type: FETCH_ITEMS_LIST_FAILED,
        error
    }
}

export function getItemsList() {
    return dispatch => {
        return fetch('http://localhost:8080/cardsList')
            .then(response => response.json())
            .then(list => dispatch(fetchItemsListSuccess(list)))
            .catch(error => dispatch(fetchItemsListFailed(error)))
    }
}