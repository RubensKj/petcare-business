import React, { useEffect } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import Footer from '../../Components/Footer';

import dog from "../../Assets/dog-main.png";
import cat from "../../Assets/cat-main.jpg";

import { isAuthenticated } from '../../Services/auth';

import './styles.css';

export default function Main(props) {

  useEffect(() => {
    if (isAuthenticated()) {
      props.history.push('/dashboard')
    }
  }, [props.history])

  return (
    <>
      <HeaderMainPage />
      <div className="body-main">
        <div className="container-main">
          <div className="banner-main-dog">
            <img src={dog} alt="" />

            <div className="banner-h1">
              <h1>Em prol do bem-estar do seu pet!</h1>
            </div>

            <div className="banner-p">
              <p>A felicidade do seu amigo está a um clique</p>
              <a href="/entrar">Crie sua conta</a>
            </div>
          </div>
          <div className="banner-main-cat">
            <img src={cat} alt="" />
            <div className="banner-h1-cat">
              <h1>Venha fazer a diferença!</h1>
            </div>
            <div className="banner-p-cat">
              <p>Faça parte da família PetCare</p>
            </div>
            <a href="/cadastrar">Cadastre sua empresa</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
