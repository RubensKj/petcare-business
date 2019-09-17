import React, { useEffect } from 'react';

import FixedBar from '../../Components/FixedBar';
import Loading from '../../Components/Loading';

import PawLogo from '../../Assets/PawLogo';
import PetShopDogLogo from '../../Assets/PetShopDogLogo.svg';

import { isAuthenticated, logout } from '../../Services/auth';
import api from '../../Services/api';
import { useSelector, useDispatch } from 'react-redux';
import { setCompany, setIsLoading } from '../../Store/Actions/Company';

import './styles.css';

export default function SideBar({ props }) {
  const state = useSelector(state => state.Company);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated()) {
      dispatch(setIsLoading(true));
      async function loadCompany() {
        await api.get("/profile-company").then(res => {
          dispatch(setCompany(res.data));
          dispatch(setIsLoading(false));
          const rate = Math.floor(res.data.rate);
          for (var i = 0; i < rate; i++) {
            let paws = document.querySelectorAll(".svg-faw");
            paws[i].classList.add('faw-rating');
          }
        }).catch(error => {
          if(error.message === "Request failed with status code 401" && isAuthenticated()) {
            logout();
            props.history.push('/entrar');
          }
        });
      }
      loadCompany();
    } else {
      props.history.push('/entrar');
    }
  }, [dispatch, props.history, state.rate])

  const company = state.data;
  const isLoading = state.isLoading;

  return (
    <>
      <FixedBar />
      <aside id="sidebar-menu-left" className="sidebar">
        <div className="container-sidebar-left">
          <div className="information-company">
            <div className="information-company-area">
              <img src={company.avatar ? (company.avatar) : (PetShopDogLogo)} alt="Company Logo" />
            </div>
            {isLoading ? (<Loading background="#1c1b20" />) : (
              <div className="information-company-content">
                <div className="info-company-title">
                  <h1>{company.companyName}</h1>
                </div>
                <div className="info-company-paws">
                  <PawLogo />
                  <PawLogo />
                  <PawLogo />
                  <PawLogo />
                  <PawLogo />
                  <span>{company.rate === 5 ? ("5.0") : (company.rate)}</span>
                </div>
              </div>
            )}
          </div>
          <div className="bottom-company-status">
            <div className="cart-set-status">
              <h3>{company.status}</h3>
            </div>
          </div>
          <div className="company-list-menu">
            <div className="transition">
              <h1>Home</h1>
              <div className="bar" />
            </div>
            <ul className="list-area">
              <a href="/dashboard"><li>Inicio</li></a>
              <a href="/pedidos"><li>Pedidos</li></a>
              <a href="/servicos"><li>Serviços</li></a>
              <a href="/produtos"><li>Produtos</li></a>
              <a href="/avaliacoes"><li>Avaliações</li></a>
            </ul>
            <div className="transition">
              <h1>Cadastros</h1>
              <div className="bar" />
            </div>
            <ul className="list-area">
              <a href="/cadastrar-servico"><li>Cadastrar Serviço</li></a>
              <a href="/cadastrar-produto"><li>Cadastrar Produto</li></a>
              <a href="/configuracoes"><li>Informações da empresa</li></a>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
