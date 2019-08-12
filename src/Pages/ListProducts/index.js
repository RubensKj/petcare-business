import React from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import SearchBox from '../../Components/SearchBox';
import ProductCard from '../../Components/ProductCard';

import { searchInList } from '../../Helpers/Functions';

import './styles.css';

export default function ListProducts() {

  return (
    <>
      <SideBar />
      <div className="container-page-sidebar">
        <HeaderEditPage editPage={true} />
        <div className="container-product">
          <SearchBox searchMethod={(e) => searchInList(e, "input-search-search-box", "container-list-products", "product", "title-product-area")} placeholder="Pesquise por um produto" />
          <div className="buttons">
            <button className="delete-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              <span>Deletar</span>
            </button>
            <a href="/" className="signup-product">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>Cadastrar</span>
            </a>
          </div>
          <div id="container-list-products" className="container-list-products">
            <ProductCard product={null} actionThreeDots={true} />
          </div>
        </div>
      </div>
    </>
  );
}
