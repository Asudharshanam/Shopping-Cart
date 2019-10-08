import React from 'react'
import AmericanExpress from '../icons/amex.png'
import Visa from '../icons/visa.png'
import MasterCard from '../icons/mastercard.png'
import Discover from '../icons/discover.png'

export function Payment({ onPaymentDetailsChange, paymentDetails, submitPaymentDetails, cardType }) {

    function onSubmit() {
        submitPaymentDetails(paymentDetails)
    }

    return (
        <div>
            <h1>Billing Information</h1>
            <PaymentForm
                onPaymentDetailsChange={onPaymentDetailsChange}
                paymentDetails={paymentDetails}
                cardType={cardType}
            />
            <button className="SubmitPaymentButton" type="submit" onClick={onSubmit}>Submit</button>
        </div>
    )
}

export function PaymentForm({ onPaymentDetailsChange, paymentDetails, cardType }) {

    function onChange(event) {
        onPaymentDetailsChange({ [event.target.name]: event.target.value })
    }

    return (
        <form className="Form">
            <legend className="Legend">First Name:</legend>
            <input
                onBlur={() => { }}
                name="firstName"
                type="text"
                placeholder="Enter First Name"
                onChange={onChange}
                value={paymentDetails.firstName}
            />
            <legend className="Legend">Last Name:</legend>
            <input
                onBlur={() => { }}
                name="lastName"
                type="text"
                placeholder="Enter Last Name"
                onChange={onChange}
                value={paymentDetails.lastName}
            />

            <legend className="Legend">Card Number:</legend>
            {getCreditCardIconWithInput(onChange, paymentDetails, cardType)}

            <legend className="Legend">Expiration Date:</legend>
            <input
                onBlur={() => { }}
                name="expirationDate"
                type="text"
                placeholder="Enter Expiration Date in XX/XX format"
                onChange={onChange}
                value={paymentDetails.expirationDate}
            />
            <legend className="Legend">CVC:</legend>
            <input
                onBlur={() => { }}
                name="cvc"
                type="number"
                placeholder="Enter CVC"
                onChange={onChange}
                value={paymentDetails.cvc}
            />
        </form>
    )
}

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
            return <img src={Visa} className="CreditCardIcon"></img>

        case "masterCard":
            return <img src={MasterCard} className="CreditCardIcon"></img>

        case "americanExpress":
            return <img src={AmericanExpress} className="CreditCardIcon"></img>

        case "discover":
            return <img src={Discover} className="CreditCardIcon"></img>
    }
}

export default Payment