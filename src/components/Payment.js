import React from 'react'
import { withRouter } from 'react-router-dom'
import { getCreditCardIconWithInput, getCvcIconWithInput } from './InputFieldsWithIcons'

export function Payment({
    onPaymentDetailsChange,
    paymentDetails,
    submitPaymentDetails,
    cardType,
    history
}) {

    function onSubmit() {
        submitPaymentDetails(paymentDetails)
        history.push('/success')
    }

    return (
        <div>
            <PaymentForm
                onPaymentDetailsChange={onPaymentDetailsChange}
                paymentDetails={paymentDetails}
                cardType={cardType}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export function PaymentForm({ onPaymentDetailsChange, paymentDetails, cardType, onSubmit }) {

    function onChange(event) {
        onPaymentDetailsChange({ [event.target.name]: event.target.value })
    }

    return (
        <form className="Form">

            <h1>Billing Information</h1>

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
                placeholder="Enter Expiration Date in MM/YY format"
                onChange={onChange}
                value={paymentDetails.expirationDate}
            />

            <legend className="Legend">CVC:</legend>
            {getCvcIconWithInput(onChange, paymentDetails, cardType)}

            <button className="SubmitPaymentButton" type="submit" onClick={onSubmit}>Submit</button>

        </form>
    )
}

export default withRouter(Payment)