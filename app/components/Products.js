import React from 'react';
import { Link } from 'react-router';


export default function Product (props) {
  let allProducts = props.categoryProducts.length ? props.categoryProducts : props.allProducts;
  const addItemToCart = props.addItemToCart;
  const filter = props.filter;

  const handleCartClick= (evt, product) => {
      props.addItemToCart(product)
  }

  const handleProductClick= (evt,product) => {
      props.selectOneProduct(product)
  }

  const handleCategoryClick= (evt,product) => {
      props.selectCategory(product)
  }

  const averageStars = product => product.reviews.length ?  (product.reviews.reduce( (a,b)=>a + b.stars,0)/product.reviews.length).toFixed(1) : "Not Yet Rated"
  

  return (
    <div>
      <ul className='plainList'>
      {
      allProducts&&allProducts.filter( ({title}) => {
        return title.toLowerCase().includes(filter);
      }).map(product=>(
        <div key={product.id} className='well floatLeft margin10' >
          <li >
            <button className = 'cart-btn center btn-primary' onClick={e=>handleCartClick(e,product)} >Add To Cart</button>
            <h4 className='center'>{product.title}</h4>
              <div className='row'>
                <div className='margin3'>
                  <Link to={'/product/'+product.id}  >
                    <img src={product.photoURL}  className='img-thumbnail img-responsive thumbs' />
                  </Link>
               </div>
             </div>
             <p>Price: ${product.price}</p>
             {
              product.categories.map(category=>(
                <button key={category} className='btn btn-xs btn-primary margin3' onClick={e=>handleCategoryClick(e,category)}>{category}</button>
              ))
             }
            <p>Average Stars: 
              <strong className='red'>{' ' + averageStars(product)}</strong>
            </p>

          </li>
        </div>
      ))
      }
      </ul>
    </div>
  )
};
