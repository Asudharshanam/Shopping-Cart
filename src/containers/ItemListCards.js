import { connect } from 'react-redux'
import { addToCart, getItemsList } from '../actions/itemListCards'
import ItemListCards from '../components/ItemListCards'

export const mapStateToProps = state => ({
    itemsList: state.itemListCards.itemsList
})

export const mapDispatchToProps = dispatch => ({

    addToCart: (cardDetails) => {
        dispatch(addToCart(cardDetails))
    },

    getItems: dispatch(getItemsList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemListCards)