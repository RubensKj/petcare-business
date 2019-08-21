import React, { useEffect, useState } from 'react';

import SideBar from '../../Components/SideBar';
import Loading from '../../Components/Loading';
import FavoriteButton from '../../Components/FavoriteButton';
import AddressInfo from '../../Components/AddressInfo';
import StatusInfo from '../../Components/StatusInfo';
import ServiceCardToUser from '../../Components/ServiceCardToUser';
import ProductCard from '../../Components/ProductCard';

import PawLogo from '../../Assets/PawLogo';
import PetShopDogLogo from '../../Assets/PetShopDogLogo.svg';

import { useSelector } from 'react-redux';

import api from '../../Services/api';

import './styles.css';

export default function Preview(props) {
  const state = useSelector(state => state.Company);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!state.isLoading) {
      const rate = Math.floor(state.data.rate);
      for (var i = 0; i < rate; i++) {
        let paws = document.querySelectorAll(".paw-preview");
        paws[i].classList.add('faw-rating');
      }
    }
    api.get('/products/0').then(res => setProducts(res.data.content));
  }, [state.data.rate, state.isLoading])

  function selectItem(event) {
    let selectedDiv = event.currentTarget;
    selectedDiv.classList.toggle("selectedItem");
    console.log(selectedDiv);
  }

  const company = state.data;
  const isLoading = state.isLoading;

  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <div className="box-color-area" />
        <div className="content-preview">
          <div className="buttons-actions">
            <div className="actions">
              <FavoriteButton favorite={false} />
              <div className="report button-design" role="button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
                <button>Denunciar</button>
              </div>
            </div>
          </div>
          <div className="box-main-information">
            <div className="img-area">
              <img src={company.avatar ? (company.avatar) : (PetShopDogLogo)} alt="Company Logo" />
            </div>
            <div className="title-joinedDate">
              {isLoading ? (<Loading />) : (
                <>
                  <h1>{company.companyName}</h1>
                  <div className="evaluation-paws-preview">
                    <PawLogo className="paw-preview" />
                    <PawLogo className="paw-preview" />
                    <PawLogo className="paw-preview" />
                    <PawLogo className="paw-preview" />
                    <PawLogo className="paw-preview" />
                    <span>{company.rate === 5 ? ("5.0") : (company.rate)}</span>
                  </div>
                </>
              )}
            </div>
            <div className="transion-small" />
            <div className="address-status">
              <div className="address-area">
                <h3>Endereço</h3>
                {isLoading ? (<Loading boxShadow="none" />) : ((company.addresses ? (company.addresses.map(address => (<AddressInfo key={address.id} text={address.street + ', ' + address.placeNumber + ' - ' + (address.complement ? (address.complement) : ('')) + address.neighborhood + ', ' + address.city + ' - ' + address.cep} />))) : (<AddressInfo text="Esta empresa não possui nenhum endereço." />)))}
              </div>
              <div className="status-area">
                <h3>Horário</h3>
                {isLoading ? (<Loading boxShadow="none" />) : (<StatusInfo text={company.status} />)}
              </div>
            </div>
          </div>
        </div>
        <div className="content-company">
          <div className="products-area">
            <div className="title-area">
              <h3>Serviços</h3>
            </div>
            <div className="transion-small" />
            <div className="grid-services">
              <ServiceCardToUser onClick={event => selectItem(event)} />
            </div>
            <div className="title-area">
              <h3>Produtos</h3>
            </div>
            <div className="transion-small" />
            <div className="grid-products">
              {products.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            <div className="button-load-more">
              <button>Carregar mais pet shops</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
