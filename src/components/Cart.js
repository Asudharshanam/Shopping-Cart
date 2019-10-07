import React from 'react'
import CartIcon from '../icons/CartIcon.png'

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
                    {content.length && <div>{getTotalAmount(content)}<hr></hr></div>}
                    <div className="ModalItem">
                        {content.length && content.map(item => (
                            <div key={item.itemId}>
                                <img alt="JerseyImage" className="JerseyImage" src={item.itemImage} />
                                <h1>{item.itemtitle}</h1>
                                <p>{item.itemCost}</p>
                                <p>{item.itemDescription}</p>
                                <p>Added to Cart</p>
                                <button name={item.itemId} onClick={updateCartItems}>Delete Item</button>
                            </div>
                        ))}
                    </div>
                    {!content.length && <p>Your cart is empty</p>}
                </div>}
            </div >
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
                <button
                    className="CartButton"
                    onClick={() => this.toggleCartItems(true)}
                >
                    <img
                        alt="CartIcon"
                        className="CartIcon"
                        src={CartIcon} />
                    {getCartItemsCount(this.props.cartItems)}
                </button>
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
    if (numberOfItems) {
        return <div>{numberOfItems}</div>
    }
}

export function getTotalAmount(content) {

    if (content.length) {
        let getCost = content.map(item => item.itemCost.replace(/\$/g, ''))
        let getArrayOfNumbers = getCost.map(Number)
        let totalCost = getArrayOfNumbers.reduce((a, b) => a + b)
        return (
            <div>Total Amount: ${totalCost}</div>
        )
    }
}

export default Cart