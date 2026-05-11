//import React from 'react';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, updateCartQuantity } from './CartSlice';
import './CartItem.css';
import ProductList from './ProductList';

const CartItem = ({ onContinueShopping }) => {
  //const [showCart, setShowCart] = useState(true);
  //const [showPlants, setShowPlants] = useState(false); 

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  
  // Calculate total amount for all products in the cart
  //const calculateTotalAmount = () => {0}; 
  const calculateTotalAmount = () => {

   
   //alert('calculateTotalAmount');
   //cartItems.forEach((item) => {
   //   if (item.quantity > 0) {
   //     items.push({ ...item, type: "plant" });
   
    //}})
   return cartItems.reduce((total,item) => {total + item.cost*item.quantity},0);
  };
 
  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleIncrement = (item) => {
    {dispatch(addItemToCart(item));};
  };

  const handleDecrement = (item) => {
     {dispatch(updateCartQuantity(item));};
  };

  const handleRemove = (item) => {
     {dispatch(removeItemFromCart(item));};
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
   //alert('calculateTotalCost');
   return cartItems.reduce((total,item) => total + item.cost,0);
   //const calculateTotalCost = cart.reduce((item) => {
   //calculateTotalAmount()+item.cost,0});
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };


  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
       {/*}<div><p>test</p>*/}
        {cartItems.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              {/*<div className="cart-item-total">Total: 0</div>*/}
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      {/*</div>*/}
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


