import { connect } from 'react-redux'
import { paymentDetailsChange } from '../actions/payment'
import Payment from '../components/Payment'

export const mapStateToProps = state => ({
    paymentDetails: state.payment.paymentDetails,
    cardType: state.payment.cardTypeEntered
})

export const mapDispatchToprops = dispatch => ({

    onPaymentDetailsChange: (changedValue) => {
        dispatch(paymentDetailsChange(changedValue))
    },

    submitPaymentDetails: (paymentDetails) => {
        console.log(paymentDetails)
    }
    
})

export default connect(mapStateToProps, mapDispatchToprops)(Payment)