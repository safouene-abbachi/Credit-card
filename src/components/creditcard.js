import React from "react";


const CreditCard = () => {
  return (
    <div className="credit-card">
      <div className="bank-name">BANK, INC</div>
      <img className="puce" src={require('./puce.png')} />
      <div className="card-number">1234567812345678</div>
      
      <div className="expiration">1234
      <span className="valid-thru">Valid Thru</span> <span className="date">15/05</span>
      </div>
      <img className="visa" src={require('./master.png')} />
      <div className="person-name">Safouene Abbachi</div>
    </div>
  );
};

export default CreditCard;
