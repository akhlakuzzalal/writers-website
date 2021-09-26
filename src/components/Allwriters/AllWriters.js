import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Writer from '../Writer/Writer';
import './allwriters.css'


const AllWriters = () => {
   const [writers, setWruiters] = useState([]);

   const [carts, setCArts] = useState([]);

   useEffect(() => {
      const url = "./WriterData.json"
      fetch(url)
         .then(res => res.json())
         .then(data => setWruiters(data));
   }, []);

   const handleDealBtn = key => {
      if (carts.find(cart => cart.key === key)) {
         alert("You are already added this writer")
      }
      else {
         const cart1 = [...carts];
         const writer = writers.find(writer => writer.key === key);
         cart1.push(writer)
         setCArts(cart1)
      }

   };
   // console.log(carts)

   let total = 0;
   for (let oneCart of carts) {
      console.log(oneCart)
      total = total + oneCart.value
   };

   return (
      <div className="container">
         <div className="Writers-container">
            {
               writers.map(writer => <Writer
                  key={writer.key}
                  handleDealBtn={handleDealBtn}
                  writer={writer}
               ></Writer>)
            }
         </div>
         {/* Cart Container */}
         <div className="cart-container">
            <h1 id="cart-heading">Your Selected Writers</h1>
            <h2>You added {carts.length} writers</h2>
            <h3>Pay: <span className="payable-ammount">{total}</span> TK For Deal</h3>
            {carts.map(cart => <Cart
               cart={cart}
               key={cart.key}
            ></Cart>)}
         </div>
      </div>
   );
};

export default AllWriters;