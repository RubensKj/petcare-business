import React from 'react';

import './styles.css';

export default function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-information">
        <div className="title-service">
          <h3>Tosa</h3>
        </div>
        <div className="description-service">
          <p>Gran Plus Gatos Castrados Frango e Arroz - 10kg- Ração premium especial indicada para gatos adultos e castrados.- Energia reduzida - indicado para gatos castrados ou que vivem em ambientes internos.- Ótima palatabilidade.- 100% satisfação garantida.Gran Plus Gatos Castrados Frango e Arroz - 10kg- Ração premium especial indicada para gatos adultos e castrados.- Energia reduzida - indicado para gatos castrados ou que vivem em ambientes internos.- Ótima palatabilidade.- 100% satisfação garantida.</p>
        </div>
      </div>
    </div>
  );
}
