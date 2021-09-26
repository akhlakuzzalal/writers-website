import React from 'react';
import './cart.css'

const Cart = (props) => {
   // console.log(props.cartArray);
   const { name, img } = props.cart;


   return (
      <div>
         <div className="single-cart">
            <div className="cart-detail">
               <img src={img} alt="" />
               <h4>{name}</h4>
            </div>
            <div className="cross"><i className="fas fa-times"></i></div>
         </div>
      </div>
   );
};

export default Cart;