import React from 'react'
import { withRouter } from 'react-router-dom'
import { getCreditCardIconWithInput, getCvcIconWithInput } from './InputFieldsWithIcons'

export function Payment({
    history,
    cardType,
    errorMessage,
    paymentDetails,
    submitPaymentDetails,
    onPaymentDetailsChange,
    validatePaymentFormFields,
}) {

    function onSubmit() {
        submitPaymentDetails(paymentDetails)
        history.push('/success')
    }

    return (
        <div>
            <PaymentForm
                cardType={cardType}
                onSubmit={onSubmit}
                errorMessage={errorMessage}
                paymentDetails={paymentDetails}
                onPaymentDetailsChange={onPaymentDetailsChange}
                validatePaymentFormFields={validatePaymentFormFields}
            />
        </div>
    )
}

export function PaymentForm({
    validatePaymentFormFields,
    onPaymentDetailsChange,
    paymentDetails,
    errorMessage,
    cardType,
    onSubmit,
}) {

    function onChange(event) {
        validatePaymentFormFields(event.target.name, event.target.value)
        onPaymentDetailsChange({ [event.target.name]: event.target.value })
    }

    function onBlur(event) {
        validatePaymentFormFields(event.target.name, event.target.value)
    }

    return (
        <form className="Form">

            <h1>Billing Information</h1>

            <legend className="Legend">First Name:</legend>
            <input
                onBlur={onBlur}
                name="firstName"
                type="text"
                placeholder="Enter First Name"
                onChange={onChange}
                value={paymentDetails.firstName}
            />
            <i className="ErrorMessage">{errorMessage.firstName}</i>
            
            <legend className="Legend">Last Name:</legend>
            <input
                onBlur={onBlur}
                name="lastName"
                type="text"
                placeholder="Enter Last Name"
                onChange={onChange}
                value={paymentDetails.lastName}
            />
            <i className="ErrorMessage">{errorMessage.lastName}</i>

            <legend className="Legend">Card Number:</legend>
            {getCreditCardIconWithInput(onChange, paymentDetails, cardType, onBlur)}
            <i className="ErrorMessage">{errorMessage.cardNumber}</i>

            <legend className="Legend">Expiration Date:</legend>
            <input
                onBlur={onBlur}
                name="expirationDate"
                type="text"
                placeholder="MM/YY format"
                onChange={onChange}
                value={paymentDetails.expirationDate}
            />
            <i className="ErrorMessage">{errorMessage.expirationDate}</i>

            <legend className="Legend">CVC:</legend>
            {getCvcIconWithInput(onChange, paymentDetails, cardType, onBlur)}
            <i className="ErrorMessage">{errorMessage.cvc}</i>

            <button className="SubmitPaymentButton" type="submit" onClick={onSubmit}>Submit</button>

        </form>
    )
}

export default withRouter(Payment)