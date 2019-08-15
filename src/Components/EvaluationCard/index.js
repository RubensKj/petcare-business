import React from 'react';

import PawLogo from '../../Assets/PawLogo';

import './styles.css';

export default function EvaluationCard({ evaluation }) {
  return (
    <div className="evaluation">
      <div className="header-information">
        <div className="user-content">
          <div className="avatar-product-area">
            <img src="https://www.midlandsderm.com/wp-content/uploads/2019/04/Rachel-R.-Person-760x760.jpg" alt="Product Logo" />
          </div>
          <div className="info-header">
            <h1>Rubens Kleinschmidt Júnior</h1>
            <div className="paws">
              <PawLogo />
              <PawLogo />
              <PawLogo />
              <PawLogo />
              <PawLogo />
              <span>4.2</span>
            </div>
          </div>
        </div>
        <div className="date-evalution">
          <span>10/02/2019 - 14:02</span>
        </div>
      </div>
      <div className="content-evalution">
        <p>Traduzido do inglês-A avaliação é um determinação sistemática do mérito, valor e significado de um sujeito, usando critérios regidos por um conjunto de padrõesTraduzido do inglês-A avaliação é um determinação sistemática do mérito, valor e significado de um sujeito, usando critérios regidos por um conjunto de padrões</p>
      </div>
    </div>
  );
}
