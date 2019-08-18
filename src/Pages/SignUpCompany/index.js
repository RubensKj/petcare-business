import React, { useEffect } from 'react';

import HeaderBoxAuth from '../../Components/HeaderBoxAuth';
import Input from '../../Components/Input';
import ButtonForm from '../../Components/ButtonForm';

import { addAnimationToInput } from '../../Helpers/Functions';

import api from '../../Services/api';
import { useSelector, useDispatch } from 'react-redux';
import { addErrors, addInput, changePhase, addState } from '../../Store/Actions/Register';

import './styles.css';

export default function SignUpPhaseTwo(props) {
  const stateSignUp = useSelector(state => state.Register);
  const dispatch = useDispatch();
  const registerUserLocalStorage = JSON.parse(localStorage.getItem('state'));

  useEffect(() => {
    if (registerUserLocalStorage === null) {
      props.history.push('/cadastrar');
    }
  }, [props.history, registerUserLocalStorage]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { cnpj, companyName } = stateSignUp.registerUser;
    const { street, placeNumber, complement, neighborhood, cep, city, state } = stateSignUp.registerUser.address;
    if (!cnpj || !companyName || !street || !placeNumber || !neighborhood || !cep || !city || !state) {
      dispatch(addErrors("Preencha todos os dados para continuar o cadastro"));
      addAnimationToInput();
    } else {
      if (cnpj < 0 || cnpj.length > 18) {
        dispatch(addErrors("CNPJ é inválido, favor inserir um correto."));
        addAnimationToInput();
        return;
      }

      if (companyName.length <= 0 || companyName.length > 250) {
        dispatch(addErrors("Digite um nome válido"));
        addAnimationToInput();
        return;
      }

      if (street.length > 250) {
        dispatch(addErrors("Rua inválida"));
        addAnimationToInput();
        return;
      }

      if (placeNumber < 0 || placeNumber > 20000) {
        dispatch(addErrors("Número inválido"));
        addAnimationToInput();
        return;
      }

      if (complement.length >= 100) {
        dispatch(addErrors("Complemento muito extenso"));
        addAnimationToInput();
        return;
      }

      if (neighborhood.length > 250) {
        dispatch(addErrors("Bairro inválido"));
        addAnimationToInput();
        return;
      }

      if (cep.length > 9) {
        dispatch(addErrors("CEP inválido"));
        addAnimationToInput();
        return;
      }

      if (state.length > 4) {
        dispatch(addErrors("Estado inválido"));
        addAnimationToInput();
        return;
      }

      await api.post("/company-auth/validate-cnpj", cnpj).then(() => {
        const mergeState = {
          completeName: registerUserLocalStorage.completeName,
          email: registerUserLocalStorage.email,
          phoneNumber: registerUserLocalStorage.phoneNumber,
          cnpj: stateSignUp.registerUser.cnpj,
          companyName: stateSignUp.registerUser.companyName,
          address: { ...stateSignUp.registerUser.address },
          description: "",
          cpf: "",
          password: "",
        }
        const { completeName, email, phoneNumber } = stateSignUp.registerUser;
        if (!completeName || !email || !phoneNumber) {
          dispatch(addState(mergeState));
        }
        dispatch(addErrors(''));
        dispatch(changePhase(3));
        localStorage.setItem('state', JSON.stringify(mergeState));
        props.history.push('/finalizar')
      }).catch(error => {
        switch (error.message) {
          case "Network Error":
            return dispatch(addErrors("O servidor está temporariamente desligado"));
          case "Request failed with status code 403":
            return dispatch(addErrors("Este CNPJ já está sendo usado"));
          default:
            return dispatch(addErrors(""));
        }
      });
    }
  }

  return (
    <div className="container-signup-phasetwo">
      <HeaderBoxAuth message="Sobre o pet shop" />
      <form className="signup-phasetwo" onSubmit={handleSubmit} autoComplete="off" autoCapitalize="off" autoCorrect="off">
        <div className="error-area">
          <h3 className="error-signup">{stateSignUp.error}</h3>
        </div>
        <Input type="text" placeholder="CNPJ" onChange={e => dispatch(addInput('ADD_CNPJ', e.target.value))} messageBottom="CNPJ deve ser do pet shop que for cadastro" />
        <Input type="text" placeholder="Nome do pet shop" onChange={e => dispatch(addInput('ADD_COMPANY_NAME', e.target.value))} messageBottom="Esse nome visível ao cliente, e no perfil da empresa" />
        <Input type="text" placeholder="Endereço" onChange={e => dispatch(addInput('ADD_STREET', e.target.value))} />
        <Input type="number" placeholder="Número" onChange={e => dispatch(addInput('ADD_PLACENUMBER', e.target.value))} max="100000.00" />
        <Input type="text" placeholder="Complemento (Opcional)" onChange={e => dispatch(addInput('ADD_COMPLEMENT', e.target.value))} />
        <Input type="text" placeholder="Bairro" onChange={e => dispatch(addInput('ADD_NEIGHBORHOOD', e.target.value))} />
        <Input type="text" placeholder="CEP" onChange={e => dispatch(addInput('ADD_CEP', e.target.value))} />
        <div className="city-states">
          <div className="city-input inputed">
            <input type="text" placeholder="Cidade" onChange={e => dispatch(addInput('ADD_CITY', e.target.value))} />
          </div>
          <div className="states inputed">
            <input type="text" placeholder="UF" onChange={e => dispatch(addInput('ADD_STATES', e.target.value))} />
          </div>
        </div>
        <ButtonForm text="Continuar cadastro" />
      </form>
    </div>
  );
}
