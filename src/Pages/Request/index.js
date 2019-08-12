import React from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import SelectRequest from '../../Components/SelectRequest';
import ServiceCard from '../../Components/ServiceCard';
import ProductCard from '../../Components/ProductCard';

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
              <SelectRequest />
            </div>
            <div className="request-information">
              <div className="header-request-information">
                <div className="number-status">
                  <div className="header-request-number">
                    <h3>Pedido: </h3>
                    <span>#21212</span>
                  </div>
                  <div className="status">
                    <h3>Status:</h3>
                    <span>Pedido gerado</span>
                  </div>
                </div>
                <div className="realized">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>13/02/2019 - 19:35</span>
                </div>
              </div>
              <div className="title-lists-header">
                <div className="title-services">
                  <h3>Serviços</h3>
                </div>
                <div className="title-product">
                  <h3>Produtos</h3>
                </div>
              </div>
              <div className="lists">
                <div className="title-lists firstTitle">
                  <h3>Serviços</h3>
                </div>
                <div className="services">
                  <div className="list-services">
                    <ServiceCard service={null} />
                  </div>
                </div>
                <div className="title-lists">
                  <h3>Produtos</h3>
                </div>
                <div className="products">
                  <div className="list-products">
                    <ProductCard product={null} actionThreeDots={false} />
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
