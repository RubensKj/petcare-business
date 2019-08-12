import React from 'react';

import './styles.css';

export default function SelectRequest() {
  return (
    <div className="status">
      <div className="process">
        <div className="gerado" />
        <div className="andamento" />
        <div className="saiu-para-entrega" />
        <div className="finalizado" />
      </div>
      <div className="button">
        <button>Proximo passo</button>
      </div>
    </div>
  );
}
