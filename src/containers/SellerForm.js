import { connect } from 'react-redux'
import { sellerFormDetailsChange } from '../actions/sellerForm'
import SellerForm from '../components/SellerForm'

export const mapStateToProps = state => ({
    sellerFormDetails: state.sellerForm.sellerFormDetails
})

export const mapDispatchToProps = dispatch => ({

    formDetailsChange: (changedValue) => {
        dispatch(sellerFormDetailsChange(changedValue))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(SellerForm)