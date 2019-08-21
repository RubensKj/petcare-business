import React from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import SearchBox from '../../Components/SearchBox';

import { searchInList } from '../../Helpers/Functions';

import './styles.css';

export default function ListRequests(props) {
  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <HeaderEditPage requestsPage={true} />
        <div className="container-requests">
          <SearchBox searchMethod={(e) => searchInList(e, "input-search-search-box", "container-list-requests", "request", "name-person")} placeholder="Pesquise por um pedido" />
          <div id="container-list-requests" className="container-list-requests">
            <div className="request" role="button">
              <div className="header-person-from-request">
                <div className="request-person-information">
                  <img src="https://www.altoastral.com.br/wp-content/uploads/2016/11/pessoa-assexuada.jpg" alt="User Logo" />
                  <h3 className="name-person">Rubens Kleinschmidt Júnior</h3>
                </div>
              </div>
              <div className="request-information">
                <div className="header-request">
                  <h3>Pedido: </h3>
                  <span>#21212</span>
                </div>
                <div className="status-request-list">
                  <h3>Status: </h3>
                  <span>Pedido gerado</span>
                </div>
                <div className="realized">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>13/02/2019 - 19:35</span>
                </div>
              </div>
              <div className="button-area-see-details">
                <div className="button-area">
                  <a href="/pedidos/id">Ver detalhes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
