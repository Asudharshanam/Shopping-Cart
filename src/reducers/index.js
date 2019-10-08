import { combineReducers } from 'redux'
import itemListCards from './itemListCards'
import payment from './payment'
import sellerForm from './sellerForm'

export default combineReducers({
  itemListCards,
  payment,
  sellerForm
})