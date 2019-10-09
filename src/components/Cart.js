import React from 'react'
import CartIcon from '../icons/CartIcon.png'
import { withRouter } from 'react-router-dom'

export function CartItems({ toggleCart, cartItems, closeModal, updateCart, history }) {

    function updateCartItems(event) {
        let items = Object.values(cartItems)
        let filterForDeletedItem = items.filter(item => item.sku !== event.target.name)
        let filteredItem = { ...filterForDeletedItem }
        updateCart(filteredItem)
    }

    function continueToPayment() {
        if (content.length) {
            closeModal()
            history.push("/payment")
        }
    }

    const content = Object.values(cartItems)
    if (toggleCart) {
        return (
            <div className="ModalDialog">
                <div className="ModalContent">
                    <span onClick={closeModal} className="ModalDialogCloseButton">x</span>
                    <GetCartItems content={content} updateCartItems={updateCartItems} />
                    {!content.length && <p>Your cart is empty</p>}
                    <button
                        onClick={continueToPayment}
                        className={content.length ? "ContinueButton" : "DisabledButton"}
                    >
                        Continue to payment
                        </button>
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
                    history={this.props.history}
                />
            </div>
        )
    }
}

function GetCartItems({ content, updateCartItems }) {
    if (content.length) {
        return (
            <div>
                <div>{getTotalAmount(content)}<hr></hr></div>
                <div className="ModalItem">
                    {content.length && content.map(item => (<div key={item.sku}>
                        <img alt="JerseyImage" className="JerseyImage" src={item.itemImage} />
                        <h1>{item.itemtitle}</h1>
                        <p>{item.itemCost}</p>
                        <p>{item.itemDescription}</p>
                        <p>Added to Cart</p>
                        <button className="ProductShowDetailsButton" name={item.sku} onClick={updateCartItems}>
                            Delete Item
                </button>
                    </div>))}
                </div>
            </div>
        )
    }
    return null
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

export default withRouter(Cart)