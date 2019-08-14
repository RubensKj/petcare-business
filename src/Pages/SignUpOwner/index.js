import React, { useEffect } from 'react';

import HeaderBoxAuth from '../../Components/HeaderBoxAuth';
import Input from '../../Components/Input';
import ButtonForm from '../../Components/ButtonForm';

import { useSelector, useDispatch } from 'react-redux';
import { addErrors, addInput, changePhase } from '../../Store/Actions/Register';

import './styles.css';

export default function SignUpOwner() {
  const state = useSelector(state => state.Register);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state)
  }, [state])

  function handleSubmit() {

  }

  return (
    <div className="container-signup-phasethree">
      <HeaderBoxAuth message="Sobre o dono" />
      <form className="form-phasethree" onSubmit={handleSubmit}>
        <Input type="text" value={state.registerUser.completeName} placeholder="Nome completo" onChange={e => dispatch(addInput('ADD_COMPLETE_NAME', e.target.value))} messageBottom="Nome completo do dono da empresa" />
        <Input type="text" placeholder="CPF" onChange={e => dispatch(addInput('ADD_CPF', e.target.value))} messageBottom="O CPF deve ser o do dono da empresa" />
        <Input type="password" placeholder="Senha" onChange={e => dispatch(addInput('ADD_PASSWORD', e.target.value))} messageBottom="Senha que será utilizada para entrar no sistema da empresa" />
        <ButtonForm text="Finalizar" />
      </form>
    </div>
  );
}
