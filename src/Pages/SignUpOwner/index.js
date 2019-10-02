import React, { useEffect, useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import HeaderBoxAuth from '../../Components/HeaderBoxAuth';
import Input from '../../Components/Input';
import ButtonForm from '../../Components/ButtonForm';

import { addAnimationToInput } from '../../Helpers/Functions';

import api from '../../Services/api';
import { useSelector, useDispatch } from 'react-redux';
import { addErrors, addInput, changePhase, addState } from '../../Store/Actions/Register';

import './styles.css';

export default function SignUpOwner(props) {
  const stateSignUp = useSelector(state => state.Register);
  const dispatch = useDispatch();
  const stateLocal = JSON.parse(localStorage.getItem('state'));
  let completeNameLocal = '';
  if (stateLocal !== null) { completeNameLocal = stateLocal.completeName }
  const [completeNameState, setCompleteNameState] = useState(completeNameLocal);

  useEffect(() => {
    if (stateLocal === null) {
      props.history.push('/cadastrar');
    }
  }, [props.history, stateLocal]);



  async function handleSubmit(e) {
    e.preventDefault();
    const { cpf, password } = stateSignUp.registerUser;
    if (!completeNameState || !cpf || !password) {
      dispatch(addErrors("Preencha todos os dados para continuar o cadastro"));
      addAnimationToInput();
    } else {
      dispatch(addErrors(""));
      if (completeNameState.length <= 0 || completeNameState.length > 1000) {
        dispatch(addErrors("Nome completo inválido " + completeNameState));
        addAnimationToInput();
        return;
      }

      let cpfWithoutPonto = cpf;
      if (cpfWithoutPonto.includes(".")) {
        cpfWithoutPonto = cpfWithoutPonto.split(".").join("");
      }
      if (cpfWithoutPonto.includes("-")) {
        cpfWithoutPonto = cpfWithoutPonto.split("-").join("");
      }

      if (cpfWithoutPonto.length > 11) {
        dispatch(addErrors("Este CPF é inválido, favor inserir um válido"));
        addAnimationToInput();
        return;
      }

      var Soma;
      var Resto;
      Soma = 0;
      if (cpfWithoutPonto === "00000000000") {
        dispatch(addErrors("Este CPF é inválido, favor inserir um válido"));
        addAnimationToInput();
        return;
      }

      for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(cpfWithoutPonto.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto === 10) || (Resto === 11)) Resto = 0;
      if (Resto !== parseInt(cpfWithoutPonto.substring(9, 10))) {
        dispatch(addErrors("Este CPF é inválido, favor inserir um válido"));
        addAnimationToInput();
        return;
      };

      Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfWithoutPonto.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto === 10) || (Resto === 11)) Resto = 0;
      if (Resto !== parseInt(cpfWithoutPonto.substring(10, 11))) {
        dispatch(addErrors("Este CPF é inválido, favor inserir um válido"));
        addAnimationToInput();
        return;
      }

      if (password.length <= 5 || password.length > 50) {
        dispatch(addErrors("Senha inválida"));
        addAnimationToInput();
        return;
      }

      const mergeState = {
        completeName: stateLocal.completeName,
        email: stateLocal.email,
        phoneNumber: stateLocal.phoneNumber,
        cnpj: stateLocal.cnpj,
        companyName: stateLocal.companyName,
        address: { ...stateLocal.address },
        description: "",
        cpf: stateSignUp.registerUser.cpf,
        password: stateSignUp.registerUser.password,
      }
      dispatch(addState(mergeState));

      await api.post("/signup-petshop", JSON.stringify(stateSignUp.registerUser)).then(() => {
        dispatch(addErrors(''));
        dispatch(changePhase(3));
        localStorage.removeItem('state');
        props.history.push('/entrar')
      }).catch(error => {
        switch (error.message) {
          case "Network Error":
            return dispatch(addErrors("O servidor está temporariamente desligado"));
          case "Request failed with status code 403":
            return dispatch(addErrors("Este CPF já está sendo usado"))
          default:
            return dispatch(addErrors(""));
        }
      });
    }
  }

  function handleCompleteName(e) {
    setCompleteNameState(e.target.value)
    const newStateWithNewName = { ...stateLocal, completeName: e.target.value }
    localStorage.setItem('state', JSON.stringify(newStateWithNewName));
  }

  // VALIDATE CPF
  function handleChangeCPFAndMask(cpf) {
    cpf = cpf.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    dispatch(addInput('ADD_CPF', cpf));
  }

  return (
    <>
      <HeaderMainPage hideBtns={true} />
      <div className="container-signup-phasethree">
        <HeaderBoxAuth message="Sobre o dono" />
        <form className="form-phasethree" onSubmit={handleSubmit} autoComplete="off" autoCapitalize="off" autoCorrect="off">
          <div className="error-area">
            <h3 className="error-signup">{stateSignUp.error}</h3>
          </div>
          <Input type="text" value={completeNameState} onChange={handleCompleteName} messageBottom="Nome completo do dono da empresa" />
          <Input type="text" placeholder="CPF" value={stateSignUp.registerUser.cpf} onChange={e => handleChangeCPFAndMask(e.target.value)} messageBottom="O CPF deve ser o do dono da empresa" />
          <Input type="password" placeholder="Senha" onChange={e => dispatch(addInput('ADD_PASSWORD', e.target.value))} messageBottom="Senha que será utilizada para entrar no sistema da empresa" autoComplete="on" />
          <ButtonForm text="Finalizar" />
        </form>
      </div>
    </>
  );
}
