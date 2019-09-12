import React, { useEffect } from 'react';

import PawLogo from '../../Assets/PawLogo';

import './styles.css';

export default function EvaluationCard({ evaluation }) {

  const ratePaws = Math.floor(3.6);

  useEffect(() => {
    console.log(ratePaws)
    let paws = document.querySelectorAll('.paw-evaluation-on');
    for (var i = 0; i < ratePaws; i++) {
      paws[i].classList.add('qtyPaws');
    }
  }, [ratePaws]);

  // Replace date of '29-02' to like this '29/02'
  //const date = evaluation.createdEvaluationAt.split("-").join("/");

  return (
    <div className="evaluation">
      <div className="header-information">
        <div className="user-content">
          <div className="info-header">
            <h1>Rubens Kleinschmidt Júnior</h1>
            <div className="paws">
              <PawLogo className="paw-evaluation-on" />
              <PawLogo className="paw-evaluation-on" />
              <PawLogo className="paw-evaluation-on" />
              <PawLogo className="paw-evaluation-on" />
              <PawLogo className="paw-evaluation-on" />
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
