import React from 'react';

import './styles.css';

export default function TransitionOfSetting({ title, description }) {
  return (
    <div className="info-header">
      <div className="content-header">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </div>
  );
}
