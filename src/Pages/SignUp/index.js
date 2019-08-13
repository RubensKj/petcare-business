import React, { useEffect } from 'react';

import HeaderBoxAuth from '../../Components/HeaderBoxAuth';

import { isAuthenticated } from '../../Services/auth';
import { addAnimationToInput } from '../../Helpers/Functions';

import api from '../../Services/api';
import { useSelector, useDispatch } from 'react-redux';
import { addErrors, addInput, changePhase } from '../../Store/Actions/Register';

import './styles.css';

export default function SignUp(props) {
  const state = useSelector(state => state.Register);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated()) {
      props.history.push('/');
    }
  }, [state, props.history]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { completeName, email, phoneNumber } = state.registerUser;
    if (!completeName || !email || !phoneNumber) {
      dispatch(addErrors("Preencha todos os dados para se cadastrar"));
      addAnimationToInput();
    } else {
      if (!email.includes('@')) {
        dispatch(addErrors("Este email não é válido"));
      } else {
        try {
          await api.post("/company-auth/validate-owner-email", email, { headers: { 'Content-Type': 'application/json' } });
          dispatch(addErrors(''));
          dispatch(changePhase(2));
          props.history.push('/create-petshop')
        } catch (err) {
          console.log(err);
          dispatch(addErrors("Nome de usuário ou email já está em uso."));
          addAnimationToInput();
        }
      }
    }
  }

  return (
    <div className="container-signup">
      <div className="box-signup">
        <HeaderBoxAuth message="Cadastre-se no PetCare" />
        <form className="signup-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="error-area">
            <h3 className="error-signup">{state.error}</h3>
          </div>
          <div className="input-area">
            <label>Nome completo: </label>
            <div className="input-div inputed">
              <input type="text" name="completeName" onChange={e => dispatch(addInput('ADD_COMPLETE_NAME', e.target.value))} />
            </div>
            <span>Deve ser o nome completo do dono da empresa.</span>
          </div>
          <div className="input-area">
            <label>Email: </label>
            <div className="input-div inputed">
              <input type="text" name="email" onChange={e => dispatch(addInput('ADD_EMAIL', e.target.value))} />
            </div>
            <span>Este será o email para entrar na empresa. Você pode adicionar o nome da empresa mais tarde.</span>
          </div>
          <div className="input-area">
            <label>Telefone: </label>
            <div className="input-div inputed">
              <input type="number" name="phoneNumber" onChange={e => dispatch(addInput('ADD_PHONENUMBER', e.target.value))} />
            </div>
            <span>Telefone para contato com a empresa.</span>
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
