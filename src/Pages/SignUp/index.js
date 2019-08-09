import React from 'react';

import HeaderBoxAuth from '../../Components/HeaderBoxAuth';

import './styles.css';

// <div className="header-signup">
//           <svg className="svg-faw" height="25" width="25" aria-hidden="true" focusable="false" data-prefix="fas" dataicon="paw" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"></path></svg>
//           <h1>Cadastre-se no PetCare</h1>
//         </div>

export default function SignUp() {

  return (
    <div className="container-signup">
      <div className="box-signup">
        <HeaderBoxAuth message="Cadastre-se no PetCare" />
        <form className="signup-form" onSubmit={null} autocomplete="off">
          <div className="error-area">
            <h3 className="error-signup">Errooooooooooooooooooooooooooooooooooo</h3>
          </div>
          <div className="input-area">
            <label>Nome completo: </label>
            <div className="input-div">
              <input type="text" name="completeName" onChange={null} />
            </div>
            <span>Deve ser o nome completo do dono da empresa.</span>
          </div>
          <div className="input-area">
            <label>Email: </label>
            <div className="input-div">
              <input type="text" name="email" onChange={null} />
            </div>
            <span>Este será o email para entrar na empresa. Você pode adicionar o nome da empresa mais tarde.</span>
          </div>
          <div className="input-area">
            <label>Senha: </label>
            <div className="input-div">
              <input type="password" name="password" onChange={null} />
            </div>
            <span>Essa senha será utilizada para entrar no perfil de configurações da empresa.</span>
          </div>
          <div className="button-area">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
      <div className="box-ref-login">
        <div className="content-login-box">
          <div className="header-ref-login">
            <span>Já possui uma empresa cadastrada?</span>
          </div>
          <div className="button-login-area">
            <a href="/entrar">Entrar</a>
          </div>
        </div>
      </div>
    </div>
  );
}
