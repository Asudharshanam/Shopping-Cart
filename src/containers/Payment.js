import { connect } from 'react-redux'
import { paymentDetailsChange, validatePaymentFormFields } from '../actions/payment'
import Payment from '../components/Payment'

export const mapStateToProps = state => ({
    paymentDetails: state.payment.paymentDetails,
    cardType: state.payment.cardTypeEntered,
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