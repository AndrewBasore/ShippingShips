import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  product: require('./product').default,
  category: require('./categories').default,
  cart: require('./cart').default,
  review: require('./review').default,
  signup: require('./signup').default,
  user: require('./user').default
})

export default rootReducer
