
import Products from '../components/Products';
import { connect } from 'react-redux';
import { setOneProduct } from '../reducers/product';

const mapStateToProps = (state) => {
  return {
  	allProducts: state.product.allProducts,
	selectedProduct: state.product.selectedProduct
    // selectedProduct: state.selectedProduct
    // selectedProduct: {title: 'Sos Your Mom', description: 'This is a description', price: 1000, inventory: 5, photoUrl: 'https://s-media-cache-ak0.pinimg.com/originals/5c/e8/b8/5ce8b86cb1e9555db731db39849b6026.jpg', categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectOneProduct (product) {
      dispatch(setOneProduct(product));
    }
  }
}


const ProductsContainer = connect(mapStateToProps,mapDispatchToProps)(Products);

export default ProductsContainer;