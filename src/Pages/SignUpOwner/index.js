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
      if (completeNameState.length <= 0 || completeNameState.length > 1000) {
        dispatch(addErrors("Nome completo inválido " + completeNameState));
        addAnimationToInput();
        return;
      }

      if (cpf < 0 || cpf.length > 14 || cpf.length < 11) {
        dispatch(addErrors("Este CPF é inválido, favor inserir um válido"));
        addAnimationToInput();
        return;
      }

      if (password.length > 50) {
        dispatch(addErrors("Senha é muito extensa"));
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
          <Input type="text" placeholder="CPF" onChange={e => dispatch(addInput('ADD_CPF', e.target.value))} messageBottom="O CPF deve ser o do dono da empresa" />
          <Input type="password" placeholder="Senha" onChange={e => dispatch(addInput('ADD_PASSWORD', e.target.value))} messageBottom="Senha que será utilizada para entrar no sistema da empresa" autoComplete="on" />
          <ButtonForm text="Finalizar" />
        </form>
      </div>
    </>
  );
}
