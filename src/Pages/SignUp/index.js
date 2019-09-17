import React, { useEffect } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import HeaderBoxAuth from '../../Components/HeaderBoxAuth';
import Input from '../../Components/Input';
import ButtonForm from '../../Components/ButtonForm';

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
    let stateLocal = localStorage.getItem('state');
    if (stateLocal !== null && stateLocal.phase !== 1) {
      localStorage.removeItem('state');
    }

    if (isAuthenticated()) {
      props.history.push('/');
    }
  }, [props.history]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { completeName, email, phoneNumber } = state.registerUser;
    if (!completeName || !email || !phoneNumber) {
      dispatch(addErrors("Preencha todos os dados para se cadastrar"));
      addAnimationToInput();
    } else {
      if (completeName.length <= 0 || completeName.length > 197) {
        dispatch(addErrors("Por favor colocar um nome completo válido"));
        addAnimationToInput();
        return;
      }

      if (!(email.includes('@') && email.includes('.com'))) {
        dispatch(addErrors("Este email não é válido"));
        addAnimationToInput();
        return;
      }

      if (phoneNumber < 0 || phoneNumber.length > 20 || phoneNumber.length < 8) {
        dispatch(addErrors("Este número de telefone não é válido"));
        addAnimationToInput();
        return;
      }

      await api.post("/company-auth/validate-owner-email/", email).then(() => {
        dispatch(addErrors(''));
        dispatch(changePhase(2));
        localStorage.setItem('state', JSON.stringify(state.registerUser));
        props.history.push('/create-petshop')
      }).catch(error => {
        switch (error.message) {
          case "Network Error":
            return dispatch(addErrors("O servidor está temporariamente desligado"));
          case "Request failed with status code 403":
            return dispatch(addErrors("Este email já está sendo usado."));
          default:
            return dispatch(addErrors(""));
        }
      });
    }
  }

  return (
    <>
      <HeaderMainPage hideBtns={true} />
      <div className="container-signup">
        <div className="box-signup">
          <HeaderBoxAuth message="Cadastre-se no PetCare" />
          <form className="signup-form" onSubmit={handleSubmit} autoComplete="off" autoCapitalize="off" autoCorrect="off">
            <div className="error-area">
              <h3 className="error-signup">{state.error}</h3>
            </div>
            <div className="input-area">
              <label>Nome completo: </label>
              <Input type="text" name="completeName" onChange={e => dispatch(addInput('ADD_COMPLETE_NAME', e.target.value))} messageBottom="Deve ser o nome completo do dono da empresa." />
            </div>
            <div className="input-area">
              <label>Email: </label>
              <Input type="text" name="email" onChange={e => dispatch(addInput('ADD_EMAIL', e.target.value))} messageBottom="Este será o email para entrar na empresa. Você pode adicionar o nome da empresa mais tarde." />
            </div>
            <div className="input-area">
              <label>Telefone: </label>
              <Input type="text" name="phoneNumber" onChange={e => dispatch(addInput('ADD_PHONENUMBER', e.target.value))} messageBottom="Telefone para contato com a empresa." />
            </div>
            <ButtonForm text="Cadastrar" />
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
    </>
  );
}
