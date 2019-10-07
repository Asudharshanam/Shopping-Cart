import React from 'react'

export function Payment({ onPaymentDetailsChange, paymentDetails, submitPaymentDetails }) {

    function onSubmit() {
        submitPaymentDetails(paymentDetails)
    }

    return (
        <div>
            <h1>Billing Information</h1>
            <PaymentForm
                onPaymentDetailsChange={onPaymentDetailsChange}
                paymentDetails={paymentDetails}
            />
            <button className="SubmitPaymentButton" type="submit" onClick={onSubmit}>Submit</button>
        </div>
    )
}

export function PaymentForm({ onPaymentDetailsChange, paymentDetails }) {

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
            <input
                onBlur={() => { }}
                name="cardNumber"
                type="number"
                placeholder="Enter Card Number"
                onChange={onChange}
                value={paymentDetails.cardNumber}
            />
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

export default Payment