import React from 'react';

import './styles.css';

export default function Loading({ text }) {
  return (
    <div className="loading-api"><span data-text={text ? (text) : ("Carregando...")} >{text ? (text) : ("Carregando...")}</span></div>
  );
}
