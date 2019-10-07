import { combineReducers } from 'redux'
import itemListCards from './itemListCards'
import payment from './payment'

export default combineReducers({
  itemListCards,
  payment
})