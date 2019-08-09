import React from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';

import './styles.css';

export default function Request() {
  return (
    <>
      <SideBar />
      <div className="container-page-sidebar">
        <HeaderEditPage requestsPage={true} />
        <div className="container-request">
          <div className="request-item">
            <div className="header-request">
              <div className="person-information">
                <img src="https://www.altoastral.com.br/wp-content/uploads/2016/11/pessoa-assexuada.jpg" alt="User Logo" />
                <h3 className="name-person">Rubens Kleinschmidt Júnior</h3>
              </div>
            </div>
            <div className="request-information">
              <div className="header-request-information">
                <div className="header-request-number">
                  <h3>Pedido: </h3>
                  <span>#21212</span>
                </div>
                <div className="realized">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>13/02/2019 - 19:35</span>
                </div>
              </div>
              <div className="lists">
                <div className="list-services">
                  <div className="list-service-item">
                    <div className="item-information">
                      <div className="title-service">
                        <h3>Tosa</h3>
                      </div>
                      <div className="description-service">
                        <p>Gran Plus Gatos Castrados Frango e Arroz - 10kg- Ração premium especial indicada para gatos adultos e castrados.- Energia reduzida - indicado para gatos castrados ou que vivem em ambientes internos.- Ótima palatabilidade.- 100% satisfação garantida.</p>
                      </div>
                    </div>
                    <div className="buttons-actions">

                    </div>
                  </div>
                </div>
                <div className="list-products">
                  <div className="list-product-item">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
