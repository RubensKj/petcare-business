import React from 'react';

import './styles.css';

export default function ServiceCardToUser({ onClick }) {
  return (
    <div className="service" onClick={onClick}>
      <div className="service-information">
        <div className="title-service">
          <h3>Banho</h3>
        </div>
        <div className="description-service">
          <p>Banho com shampoo malaco e pauladinha</p>
        </div>
        <div className="price-service">
          <p className="unity">R$</p>
          <p>24.20</p>
        </div>
      </div>
    </div>
  );
}
