import React from 'react';
import './Header.css'

const Header = () => {
   return (
      <div className="header-container">
         <h1 className="heading">Make A Deal With Favorite Writers</h1>
         <h2>You have to add one or more writers from here</h2>
         <h1 id="budget">Current Budget : <span className="budget">1000000</span> TK </h1>
      </div>
   );
};

export default Header;