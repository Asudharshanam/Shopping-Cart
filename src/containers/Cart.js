import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { updateCart } from '../actions/itemListCards'

export const mapStateToProps = state => ({
    cartItems: state.itemListCards.selectedItem
})

export const mapDispatchToProps = dispatch => ({

    updateCart: (updatedCartItems) => {
        dispatch(updateCart(updatedCartItems))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)