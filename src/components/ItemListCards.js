import React from 'react'

export class ItemListCards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDetails: false,
            showDetailsImage: "",
            showDetailsOverview: ""
        }
    }

    addItemToCart = (event) => {

        let selectedItem = this.props.itemsList.find(item => item.itemId === event.target.name)
        this.props.addToCart(selectedItem)
    }

    showDetails = (itemImage, itemOverview) => {
        this.setState({ showDetails: true, showDetailsImage: itemImage, showDetailsOverview: itemOverview })
    }

    closeModal = () => {
        this.setState({ showDetails: false })
    }

    render() {
        const { showDetails, showDetailsImage, showDetailsOverview } = this.state
        const content = { showDetailsImage, showDetailsOverview }

        return (
            <div className="ItemListCards">
                {this.props.itemsList.map(item => (
                    <div key={item.itemId} className="ListCards">
                        <h5>{item.itemTitle}</h5>
                        <img alt="JerseyImage" className="JerseyImage" src={item.itemImage} />
                        <p>{item.itemDescription}</p>
                        <p>{item.itemCost}</p>
                        <div className="ShowDetails">
                            <button className="ProductShowDetailsButton" onClick={() => this.showDetails(item.itemImage, item.itemOverview)}>More Details</button>
                            <br />
                            <button
                                className="AddToCartButton"
                                name={item.itemId}
                                onClick={this.addItemToCart}
                            >
                                Add to Cart
                    </button>
                        </div>
                    </div>
                ))}
                <ProductOverviewModal show={showDetails} content={content} closeModal={this.closeModal} />
            </div>
        )
    }
}

export function ProductOverviewModal({ show, content, closeModal }) {

    let newText = content.showDetailsOverview.split('\n').map((item, i) => {
        return <p key={i}>{item}</p>;
    });

    if (show) {
        return (
            <div className="ModalDialog">
                <div className="ModalContent">
                    <span onClick={closeModal} className="ModalDialogCloseButton">x</span>
                    <h1>Product Overview</h1>
                    <p>Features</p>
                    <hr></hr>
                    <div className="ProductDetails">
                        <img className="ProductOverviewImage" alt="JerseyImage" src={content.showDetailsImage}></img>
                        <h4>{newText}</h4>
                    </div>
                </div>
            </div>
        )
    }
    return null
}

export default ItemListCards