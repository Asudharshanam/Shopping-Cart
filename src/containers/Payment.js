import { connect } from 'react-redux'
import { paymentDetailsChange, validatePaymentFormFields } from '../actions/payment'
import Payment from '../components/Payment'
import { getCardType } from '../utils/sharedUtils'

export const mapStateToProps = state => ({
    paymentDetails: state.payment.paymentDetails,
    cardType: getCardType(state.payment.paymentDetails.cardNumber),
    errorMessage: state.payment.errorMessage,
})

export const mapDispatchToprops = dispatch => ({

    onPaymentDetailsChange: (changedValue) => {
        dispatch(paymentDetailsChange(changedValue))
    },

    submitPaymentDetails: (paymentDetails) => {
        console.log(paymentDetails)
    },

    validatePaymentFormFields: (fieldName, fieldValue) => {
        dispatch(validatePaymentFormFields(fieldName, fieldValue))
    }

})

export default connect(mapStateToProps, mapDispatchToprops)(Payment)