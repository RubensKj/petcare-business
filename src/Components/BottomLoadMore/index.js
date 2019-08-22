import React from 'react';

import './styles.css';

export default function BottomLoadMore({ text, onClick }) {
  return (
    <div className="button-load-more-to-pages">
      <button onClick={onClick}>{text ? (text) : ("Carregar")}</button>
    </div>
  );
}
