import Cart from '../components/Cart';
import { connect } from 'react-redux';
import {removeItemFromCart, increment, decrement} from 'APP/app/reducers/cart'

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
		total: state.cart.total
	}
}

const mapDispatch = dispatch => {
	return {
		removeItemFromCart: (item) => {
			dispatch(removeItemFromCart(item))
		},
		increment: (item) => {
			dispatch(increment(item));
		},
		decrement: (item) => {
			dispatch(decrement(item));
		}
	}
}

const CartContainer = connect(mapStateToProps, mapDispatch)(Cart);

export default CartContainer
