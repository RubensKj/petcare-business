import React from 'react';

import PawLogo from '../../Assets/PawLogo';

import './styles.css';

export default function EvaluationCard({ evaluation }) {

  const ratePaws = Math.floor((evaluation.rate ? (evaluation.rate) : (0)));

  // Replace date of '29-02' to like this '29/02'
  const date = evaluation.createdEvaluationAt.split("-").join("/");

  return (
    <div className="evaluation">
      <div className="header-information">
        <div className="user-content">
          <div className="info-header">
            <h1>{evaluation.nameOfUser}</h1>
            <div className="paws">
              <PawLogo className={ratePaws >= 1 ? ('qtyPaws') : ('')} />
              <PawLogo className={ratePaws >= 2 ? ('qtyPaws') : ('')} />
              <PawLogo className={ratePaws >= 3 ? ('qtyPaws') : ('')} />
              <PawLogo className={ratePaws >= 4 ? ('qtyPaws') : ('')} />
              <PawLogo className={ratePaws >= 5 ? ('qtyPaws') : ('')} />
              <span>{evaluation.rate}</span>
            </div>
          </div>
        </div>
        <div className="date-evalution">
          <span>{date}</span>
        </div>
      </div>
      {evaluation.description ? (
        <div className="content-evalution">
          <p>{evaluation.description}</p>
        </div>
      ) : ('')}
    </div>
  );
}
