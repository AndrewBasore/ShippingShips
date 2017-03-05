import Header from '../components/Header';
import { connect } from 'react-redux';
import {loadProductsInCat, setCategory} from '../reducers/categories'

const mapStateToProps = (state) => {
  return {
    category: state.category,
    auth: state.auth,
    cart: state.cart
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    onClick (category) {
      dispatch(loadProductsInCat(category))
      dispatch(setCategory(category))
    }
  }
 }

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
