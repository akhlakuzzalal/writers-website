import React from 'react';
import './writer.css'

const Writer = (props) => {
   const { name, book, Occupation, born, value, img, key } = props.writer;
   const handleDealBtn = props.handleDealBtn;


   return (
      <div className="writer">
         <div>
            <img src={img} alt="" />
            <h2 className="writer-name">Name: {name}</h2>
            <h3>Occupation: {Occupation}</h3>
            <h5>Date of Birth{born}</h5>
            <p>Special Book Name: {book}</p>
            <p>Deal with <span className="value">{value}</span> Tk</p>
         </div>
         <button className="deal-btn" onClick={() => handleDealBtn(key)}><i className="fas fa-shopping-cart"></i> Add cart For Deal</button>
      </div>
   );
};

export default Writer;