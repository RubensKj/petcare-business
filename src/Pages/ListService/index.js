import React from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import SearchBox from '../../Components/SearchBox';
import ServiceCard from '../../Components/ServiceCard';

import { searchInList } from '../../Helpers/Functions';

import './styles.css';

export default function ListService() {
  return (
    <>
      <SideBar />
      <div className="container-page-sidebar">
        <HeaderEditPage editPage={true} />
        <div className="container-service">
          <SearchBox searchMethod={(e) => searchInList(e, "input-search-search-box", "container-list-services", "service-card", "title-service")} placeholder="Pesquise por um produto" />
          <div className="buttons-service">
            <a href="/cadastrar-servico" className="signup-product">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>Cadastrar</span>
            </a>
          </div>
          <div id="container-list-services" className="container-list-services">
            <ServiceCard />
          </div>
        </div>
      </div>
    </>
  );
}
