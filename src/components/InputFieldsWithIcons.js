import React from 'react'
import AmericanExpress from '../icons/amex.png'
import Visa from '../icons/visa.png'
import MasterCard from '../icons/mastercard.png'
import Discover from '../icons/discover.png'
import Info from '../icons/info.png'
import OtherCardsCvc from '../icons/masterandvisacvc.jpg'
import AmexCvc from '../icons/amexcvc.jpg'

export function getCreditCardIconWithInput(onChange, paymentDetails, cardType) {
    return (
        <div className="IconContainerWithInput">
            <input
                onBlur={() => { }}
                name="cardNumber"
                type="number"
                placeholder="Enter Card Number"
                onChange={onChange}
                value={paymentDetails.cardNumber}
            />
            {getCreditCardIcon(cardType)}
        </div>
    )
}

export function getCreditCardIcon(cardType) {
    switch (cardType) {
        case "visa":
            return <img src={Visa} className="CreditCardIcon" alt="CreditCardIcon"></img>

        case "masterCard":
            return <img src={MasterCard} className="CreditCardIcon" alt="CreditCardIcon"></img>

        case "americanExpress":
            return <img src={AmericanExpress} className="CreditCardIcon" alt="CreditCardIcon"></img>

        case "discover":
            return <img src={Discover} className="CreditCardIcon" alt="CreditCardIcon"></img>

        default:
            return null
    }
}

export function getCvcIconWithInput(onChange, paymentDetails, cardType) {

    function getCvcSideBasedOnCardType(cardType) {
        if (cardType === "americanExpress") {
            return <img alt="CvcTypeIcon" src={AmexCvc}></img>
        } else {
            return <img alt="CvcTypeIcon" src={OtherCardsCvc}></img>
        }
    }

    return (
        <div className="IconContainerWithInput">
            <input
                onBlur={() => { }}
                name="cvc"
                type="number"
                placeholder="Enter CVC"
                onChange={onChange}
                value={paymentDetails.cvc}
            />
            <img src={Info} className="CvcType" alt="CvcType"></img>
            <div className="CvcTypeTooltip">{getCvcSideBasedOnCardType(cardType)}</div>
        </div>
    )
}