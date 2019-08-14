import React, { useEffect } from 'react';

import HeaderBoxAuth from '../../Components/HeaderBoxAuth';
import Input from '../../Components/Input';
import ButtonForm from '../../Components/ButtonForm';

import { addAnimationToInput } from '../../Helpers/Functions';

import api from '../../Services/api';
import { useSelector, useDispatch } from 'react-redux';
import { addErrors, addInput, changePhase } from '../../Store/Actions/Register';

import './styles.css';

export default function SignUpOwner(props) {
  const state = useSelector(state => state.Register);
  const dispatch = useDispatch();

  useEffect(() => {
    var stateLocal = localStorage.getItem('state');
    if (stateLocal === null || stateLocal.phase === 1 || stateLocal.phase === 2) {
      props.history.push('/cadastrar');
    }
  }, [props.history, state.phase]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { completeName, cpf, password } = state.registerUser;
    if (!completeName || !cpf || !password) {
      dispatch(addErrors("Preencha todos os dados para continuar o cadastro"));
      addAnimationToInput();
    } else {
      if (completeName.length <= 0 || completeName.length > 197) {
        dispatch(addErrors("Por favor colocar um nome completo válido"));
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

      try {
        await api.post("/company-auth/validate-cnpj", state.registerUser);
        dispatch(addErrors(''));
        dispatch(changePhase(3));
        localStorage.removeItem('state');
        props.history.push('/finalizar')
      } catch (err) {
        dispatch(addErrors("Este CNPJ já está sendo usado"));
      }
    }
  }

  return (
    <div className="container-signup-phasethree">
      <HeaderBoxAuth message="Sobre o dono" />
      <form className="form-phasethree" onSubmit={handleSubmit} autoComplete="off" autoCapitalize="off" autoCorrect="off">
        <div className="error-area">
          <h3 className="error-signup">{state.error}</h3>
        </div>
        <Input type="text" value={state.registerUser.completeName} placeholder="Nome completo" onChange={e => dispatch(addInput('ADD_COMPLETE_NAME', e.target.value))} messageBottom="Nome completo do dono da empresa" />
        <Input type="number" placeholder="CPF" onChange={e => dispatch(addInput('ADD_CPF', e.target.value))} messageBottom="O CPF deve ser o do dono da empresa" />
        <Input type="password" placeholder="Senha" onChange={e => dispatch(addInput('ADD_PASSWORD', e.target.value))} messageBottom="Senha que será utilizada para entrar no sistema da empresa" autoComplete="on" />
        <ButtonForm text="Finalizar" />
      </form>
    </div>
  );
}
