import React, { useEffect, useState } from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import SearchBox from '../../Components/SearchBox';
import Loading from '../../Components/Loading';
import ServiceCard from '../../Components/ServiceCard';
import BottomLoadMore from '../../Components/BottomLoadMore';

import { searchInList } from '../../Helpers/Functions';

import api from '../../Services/api';
import { isAuthenticated } from '../../Services/auth';

import './styles.css';

export default function ListServices(props) {
  const [services, setServices] = useState([]);
  const [actPage, setActPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      async function loadServices(page) {
        setIsLoading(true);
        await api.get(`/services/${page}`).then(res => {
          setServices(res.data.content);
          setTotalPages(res.data.totalPages);
          setIsLoading(false);
          if (res.data.totalPages <= 1) {
            let btn = document.querySelector(".button-load-more-to-pages");
            btn.classList.add("button-load-more-no-content");
          }
        });
      }
      loadServices(0);
    } else {
      props.history.push('/entrar');
    }
  }, [props.history]);

  async function handleLoadMoreProducts(page) {
    if (totalPages > page) {
      await api.get(`/services/${page}`).then(res => {
        setServices(services.concat(res.data.content));
        setActPage(page);
      });
    } else {
      let btn = document.querySelector(".button-load-more-to-pages");
      btn.classList.add("button-load-more-no-content");
    }
  }

  async function deleteService(id) {
    await api.delete(`/delete-service/${id}`).then(() => {
      setServices(services.filter(service => service.id !== id));
    });
  }

  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <HeaderEditPage services={true} />
        <div className="container-service">
          <SearchBox searchMethod={(e) => searchInList(e, "input-search-search-box", "container-list-services", "service-card", "title-service")} placeholder="Pesquise por um produto" />
          <div className="buttons-service">
            <a href="/cadastrar-servico" className="signup-product">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>Cadastrar</span>
            </a>
          </div>
          <div className="content-service-list">
            {isLoading ? (<Loading />) : (
              <>
                <div id="container-list-services" className="container-list-services">
                  {services.map(service => <ServiceCard key={service.id} service={service} handleDelete={deleteService} actionThreeDots={true} />)}
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
