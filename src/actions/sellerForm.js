export const SELLER_FORM_DETAILS_CHANGE = "SELLER_FORM_DETAILS_CHANGE"
export function sellerFormDetailsChange(changedValue) {
    return {
        type: SELLER_FORM_DETAILS_CHANGE,
        changedValue
    }
}

export const POST_ITEM_SUCCESS = "POST_ITEM_SUCCESS"
export function postItemSuccess() {
    return {
        type: POST_ITEM_SUCCESS
    }
}

export function postUploadedItem(dataToPost) {
    return dispatch => {
        fetch('http://localhost:8080/cardsList', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToPost)
        })
            .then(response => response.json())
            .then(data => dispatch(postItemSuccess(data)))
            .catch(error => console.log(error))
    }
}