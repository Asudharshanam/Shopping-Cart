import { connect } from 'react-redux'
import { sellerFormDetailsChange, postUploadedItem } from '../actions/sellerForm'
import SellerForm from '../components/SellerForm'

export const mapStateToProps = state => ({
    sellerFormDetails: state.sellerForm.sellerFormDetails
})

export const mapDispatchToProps = dispatch => ({

    formDetailsChange: (changedValue) => {
        dispatch(sellerFormDetailsChange(changedValue))
    },

    onSubmitItem: (formDetail) => {
        dispatch(postUploadedItem(formDetail))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(SellerForm)