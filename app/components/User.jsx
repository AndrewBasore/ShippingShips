import React from 'react';
import { Link } from 'react-router';

export default function User (props) {
  const orders = props.orders
  const user = props.user || props.currentUser
  console.log('orders',orders)
  
  return (
  	<div>
      <h2 className='center'>User Info</h2>
      <div className='well cart-item'>
      <p>Name: {user.name}</p>
      <p>Id: {user.id}</p>
    	{user.isAdmin&&(
        <p>Role: Administrator</p>
        )
      }
      </div>
      <h2 className='center'>Order Info</h2>
      {
      orders.map(order=>(
        <div className='well cart-item' key={order.id}>
        <h3>Order ID#: {order.id}</h3>
        
        <div className='margin10'>
        <p>Status: {order.status}</p>
        <p>Address: {order.address}</p>
        <p>Date Placed/Updated: {order.updated_at}</p>
        <h4>Order Items</h4>
        {
        order.orderItems.map((item,idx)=>(
          <div key ={item.id} className='margin10' >
          <span>{item.quantity + '  - '}</span>
          <Link to={'/product/'+item.product.id}  ><strong className='red'>{item.product.title+" "}</strong></Link>
          <strong>{' - $' + item.product.price}</strong>
          </div>
        ))
        }
        <h4 className='margin10 right'>Total: ${order.total}</h4>
        </div>
        </div>
      ))
      }
    </div>
  )
};




