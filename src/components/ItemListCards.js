import React from 'react'
import jerseyImage1 from '../icons/jerseyImage1.jpg'
import jerseyImage2 from '../icons/jerseyImage2.jpg'
import jerseyImage3 from '../icons/jerseyImage3.jpg'
import jerseyImage4 from '../icons/jerseyImage4.jpg'

const cardsList = [
    {
        itemId: "1",
        itemTitle: "Men's San Francisco 49ers Jimmy Garoppolo Nike Scarlet Legend Jersey",
        itemCost: "$30",
        itemDescription: "This is the item Description",
        itemOverview: "Style:	Casual\n Color:	White\n Pattern Type:	Striped, Colorblock\n Neckline:	Hooded\n Type:	Pullovers\n Details:	Drawstring, Colorblock\n Sleeve Length:	Long Sleeve\n Season:	Fall/Winter\n Composition:	Cotton\n Fit Type:	Regular Fit",
        itemImage: jerseyImage1
    },
    {
        itemId: "2",
        itemTitle: "Men's San Francisco 49ers George Kittle Nike Black Alternate Game Jersey",
        itemCost: "$100",
        itemDescription: "This is the item Description2",
        itemOverview: "Style:	Casual\n Color:	Red\n Pattern Type:	Plain\n Neckline:	High Neck\n Length:	Regular\n Type:	Pullovers\n Sleeve Length:	Long Sleeve\n Season:	Spring/Fall\n Composition:	100% Polyester\n Fabric:	Fabric has some stretch\n Fit Type:	Slim Fit",
        itemImage: jerseyImage2
    },
    {
        itemId: "3",
        itemTitle: "Men's Player Vapor Untouchable Limited Throwback Jersey",
        itemCost: "$1000",
        itemDescription: "This is the item Description3",
        itemOverview: "Style:	Casual\n Color:	Multicolor\n Pattern Type:	Colorblock, Plants\n Neckline:	Hooded\n Type:	Pullovers\n Details:	Embroidery, Drawstring\n Sleeve Length:	Long Sleeve\n Season:	Fall/Winter\n Composition:	97% Polyester, 3% Spandex\n Fabric:	Fabric has some stretch\n Fit Type:	Regular Fit",
        itemImage: jerseyImage3
    },
    {
        itemId: "4",
        itemTitle: "Men's San Francisco 49ers Jerry Rice Nike Camo 2019 Salute to Service Retired Limited Jersey",
        itemCost: "$500",
        itemDescription: "This is the item Description4",
        itemOverview: "Style:	Casual\n Color:	Multicolor\n Pattern Type:	Cartoon, Colorblock\n Neckline:	Hooded",
        itemImage: jerseyImage4
    }
]

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

        let selectedItem = cardsList.find(item => item.itemId === event.target.name)
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
                {cardsList.map(item => (
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