import Category from '../components/Category';
import { connect } from 'react-redux';
import { addItemToCart } from 'APP/app/reducers/cart'

import { setOneProduct } from '../reducers/product';

const mapStateToProps = (state) => {
  return {
    categoryProducts: state.category.selCatProducts,
    selectedProduct: state.product.selectedProduct
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    onClickCat (category)  {
      dispatch(loadProductsInCat(category))
    },
    addItemToCart: (item) => {
    	dispatch(addItemToCart(item))
    },
    selectOneProduct (product) {
      dispatch(setOneProduct(product));
    }
  }
}

const CategoryContainer = connect(mapStateToProps, mapDisptachToProps)(Category);

export default CategoryContainer;
