import React from 'react';

import './styles.css';

export default function SelectRequest({ status, onClick }) {
  return (
    <div className="status">
      <div className="process">
        <div className={status >= 1 ? ('gerado processBar') : ('gerado')} />
        <div className={status >= 2 ? ('andamento processBar') : ('andamento')} />
        <div className={status >= 3 ? ('saiu-para-entrega processBar') : ('saiu-para-entrega')} />
        <div className={status >= 4 ? ('finalizado processBar') : ('finalizado')} />
      </div>
      <div className="button" role="button" onClick={onClick}>
        <button>Proximo passo</button>
      </div>
    </div>
  );
}
