
import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';
import {loadProductsInCat, setCategory} from '../reducers/categories'
import { setOneProduct } from '../reducers/product';

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
    },

    selectOneProduct (product) {
      dispatch(setOneProduct(product))
  	}
  }
 }
const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
