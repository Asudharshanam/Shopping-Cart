import { connect } from 'react-redux'
import { addToCart } from '../actions/itemListCards'
import ItemListCards from '../components/ItemListCards'

export const mapStateToProps = () => ({})

export const mapDispatchToProps = dispatch => ({

    addToCart: (cardDetails) => {
        dispatch(addToCart(cardDetails))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemListCards)