import React from 'react';

import './styles.css';

export default function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-information">
        <div className="title-service">
          <h3>{service.name}</h3>
        </div>
        <div className="description-service">
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
}
