import React, { useEffect, useState } from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import SearchBox from '../../Components/SearchBox';
import Loading from '../../Components/Loading';
import ProductCard from '../../Components/ProductCard';
import BottomLoadMore from '../../Components/BottomLoadMore';

import { searchInList } from '../../Helpers/Functions';

import api from '../../Services/api';
import { isAuthenticated } from '../../Services/auth';

import './styles.css';

export default function ListProducts(props) {
  const [products, setProducts] = useState([]);
  const [actPage, setActPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      async function loadProducts(page) {
        setIsLoading(true);
        await api.get(`/products/${page}`).then(res => {
          setProducts(res.data.content);
          setTotalPages(res.data.totalPages);
          setIsLoading(false);
          if (res.data.totalPages <= 1) {
            let btn = document.querySelector(".button-load-more-to-pages");
            btn.classList.add("button-load-more-no-content");
          }
        });
      }
      loadProducts(0);
    } else {
      props.history.push('/entrar');
    }
  }, [props.history]);

  async function handleLoadMoreProducts(page) {
    if (totalPages > page) {
      await api.get(`/products/${page}`).then(res => {
        setProducts(products.concat(res.data.content));
        setActPage(page);
      });
    } else {
      let btn = document.querySelector(".button-load-more-to-pages");
      btn.classList.add("button-load-more-no-content");
    }
  }

  async function deleteProduct(id) {
    await api.delete(`/delete-product/${id}`).then(() => {
      setProducts(products.filter(product => product.id !== id));
    });
  }

  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <HeaderEditPage editPage={true} />
        <div className="container-product">
          <SearchBox searchMethod={(e) => searchInList(e, "input-search-search-box", "container-list-products", "product", "title-product-area")} placeholder="Pesquise por um produto" />
          <div className="buttons">
            <button className="delete-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              <span>Deletar</span>
            </button>
            <a href="/cadastrar-produto" className="signup-product">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>Cadastrar</span>
            </a>
          </div>
          <div className="content-list">
            {isLoading ? (<Loading />) : (
              <>
                <div id="container-list-products" className="container-list-products">
                  {products.map(product => <ProductCard key={product.id} product={product} handleDelete={deleteProduct} actionThreeDots={true} />)}
                </div>
                <BottomLoadMore text="Carregar mais produtos" onClick={() => handleLoadMoreProducts(actPage + 1)} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
