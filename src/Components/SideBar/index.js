import React, { useEffect } from 'react';

import FixedBar from '../../Components/FixedBar';
import PawLogo from '../../Assets/PawLogo';
import Loading from '../../Components/Loading';

import api from '../../Services/api';
import { useSelector, useDispatch } from 'react-redux';
import { setCompany, setIsLoading } from '../../Store/Actions/Company';

import './styles.css';

export default function SideBar() {
  const state = useSelector(state => state.Company);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    async function loadCompany() {
      await api.get("/profile-company").then(res => {
        const rate = Math.floor(res.data.rate);
        for (var i = 0; i < rate; i++) {
          let paws = document.querySelectorAll(".svg-faw");
          paws.forEach(paw => { paw.classList.add('faw-rating'); });
        }
        dispatch(setCompany(res.data));
        dispatch(setIsLoading(false));
      }).catch(error => {
        console.log(error);
      });
    }
    loadCompany();
  }, [dispatch])

  const company = state.data;
  const isLoading = state.isLoading;

  return (
    <>
      <FixedBar />
      <aside id="sidebar-menu-left" className="sidebar">
        <div className="container-sidebar-left">
          <div className="information-company">
            <div className="information-company-area">
              <img src="https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/36919020_268531707232126_6615945512266760192_n.jpg?_nc_cat=104&_nc_oc=AQkT9OzKnH47MyQHguJZ8Wt38JFTYtrVKfROYDr46Tk2_RGFIGMkcWPXw3UaNS-bwKs&_nc_ht=scontent.fbnu1-1.fna&oh=82722e4b1b45ab3b0563f72bdfee5482&oe=5DEBBFF4" alt="Company Logo" />
            </div>
            <div className="information-company-content">
              <div className="info-company-title">
                <h1>{isLoading ? (<Loading />) : (company.companyName)}</h1>
              </div>
              <div className="info-company-paws">
                <PawLogo />
                <PawLogo />
                <PawLogo />
                <PawLogo />
                <PawLogo />
                <span>{isLoading ? (<Loading text="..." />) : (company.rate === 5 ? ("5.0") : (company.rate))}</span>
              </div>
            </div>
          </div>
          <div className="company-list-menu">
            <div className="transition">
              <h1>Home</h1>
              <div className="bar" />
            </div>
            <ul className="list-area">
              <a href="/"><li>Inicio</li></a>
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
