import React from 'react'

export function CartItems({ toggleCart, cartItems, closeModal, updateCart }) {

    function updateCartItems(event) {
        let items = Object.values(cartItems)
        let filterForDeletedItem = items.filter(item => item.itemId !== event.target.name)
        let filteredItem = { ...filterForDeletedItem }
        updateCart(filteredItem)
    }

    const content = Object.values(cartItems)
    if (toggleCart) {
        return (
            <div className="ModalDialog">
                <div className="ModalContent">
                    <span onClick={closeModal} className="ModalDialogCloseButton">x</span>
                    {content.length && content.map(item => (
                        <div key={item.itemId}>
                            <h1>{item.itemtitle}</h1>
                            <p>{item.itemCost}</p>
                            <p>{item.itemDescription}</p>
                            <p>Added to Cart</p>
                            <button name={item.itemId} onClick={updateCartItems}>Delete Item</button>
                            <hr></hr>
                        </div>
                    ))}
                    {!content.length && <p>Your cart is empty</p>}
                </div>}
            </div>
        )
    }
    return null
}


export class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleCart: false
        }
    }

    toggleCartItems = (show) => {
        this.setState({ toggleCart: show })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggleCartItems(true)}>Cart{getCartItemsCount(this.props.cartItems)}</button>
                <CartItems
                    toggleCart={this.state.toggleCart}
                    cartItems={this.props.cartItems}
                    closeModal={() => this.toggleCartItems(false)}
                    updateCart={this.props.updateCart}
                />
            </div>
        )
    }
}

export function getCartItemsCount(cartItems) {
    let numberOfItems = Object.values(cartItems).length
    if(numberOfItems) {
        return <div>{numberOfItems}</div>
    }
}

export default Cart