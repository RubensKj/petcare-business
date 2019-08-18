import React from 'react';

import HeaderBoxAuth from '../../Components/HeaderBoxAuth';

import './styles.css';

export default function LogIn() {
  return (
    <div className="container-login">
      <div className="box-login">
        <HeaderBoxAuth message="Entre no PetCare" />
        <form className="login-form" onSubmit={null} autoComplete="off">
          <div className="error-area">
            <h3 className="error-login">Errooooooooooooooooooooooooooooooooooo</h3>
          </div>
          <div className="input-area">
            <label>Email:</label>
            <div className="input-div">
              <input type="text" name="email" onChange={null} />
            </div>
          </div>
          <div className="input-area">
            <label>Senha:</label>
            <div className="input-div">
              <input type="password" name="password" onChange={null} />
            </div>
          </div>
          <div className="button-area">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
      <div className="box-ref-signup">
        <div className="content-signup-box">
          <div className="header-ref-signup">
            <span>Não possui cadastro?</span>
          </div>
          <div className="button-signup-area">
            <a href="/cadastrar">Cadastre-se</a>
          </div>
        </div>
      </div>
    </div>
  );
}
