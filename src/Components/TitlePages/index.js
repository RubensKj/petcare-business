import React from 'react';

import './styles.css';

export default function TitlePages({ text }) {
  return (
    <div className="header-title-settings">
      <h1>{text}</h1>
    </div>
  );
}
