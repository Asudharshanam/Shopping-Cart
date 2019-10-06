import React from 'react'

const cardsList = [
    {
        itemId: "1",
        itemTitle: "Item Title",
        itemCost: "30$",
        itemDescription: "This is the item Description"
    },
    {
        itemId: "2",
        itemTitle: "Item Title2",
        itemCost: "100$",
        itemDescription: "This is the item Description2"
    },
    {
        itemId: "3",
        itemTitle: "Item Title3",
        itemCost: "1000$",
        itemDescription: "This is the item Description3"
    },
    {
        itemId: "4",
        itemTitle: "Item Title4",
        itemCost: "500$",
        itemDescription: "This is the item Description4"
    }
]

export function ItemListCards({ addToCart }) {

    function addItemToCart(event) {

        let selectedItem = cardsList.find(item => item.itemId === event.target.name)
        addToCart(selectedItem)
    }

    return (
        <div className="ItemListCards">
            {cardsList.map(item => (
                <div key={item.itemId} className="ListCards">
                    <h1>{item.itemTitle}</h1>
                    <p>{item.itemCost}</p>
                    <p>{item.itemDescription}</p>
                    <button
                        name={item.itemId}
                        onClick={addItemToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ItemListCards