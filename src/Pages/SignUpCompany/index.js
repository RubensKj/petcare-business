import React, { useEffect } from 'react';

import HeaderBoxAuth from '../../Components/HeaderBoxAuth';
import Input from '../../Components/Input';
import ButtonForm from '../../Components/ButtonForm';

import { useSelector, useDispatch } from 'react-redux';
import { addErrors, addInput, changePhase } from '../../Store/Actions/Register';

import './styles.css';

export default function SignUpPhaseTwo(props) {
  const state = useSelector(state => state.Register);
  const dispatch = useDispatch();

  useEffect(() => {
    //var stateLocal = localStorage.getItem('state');
    //if(stateLocal === null || stateLocal.phase === 1) {
    //  props.history.push('/cadastrar');
    //}
  }, [props.history, state.phase])

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.removeItem('state');
  }

  return (
    <div className="container-signup-phasetwo">
      <HeaderBoxAuth message="Sobre o pet shop" />
      <form className="signup-phasetwo" onSubmit={handleSubmit}>
        <Input type="number" placeholder="CNPJ" onChange={e => dispatch(addInput('ADD_CNPJ', e.target.value))} messageBottom="CNPJ deve ser do pet shop que for cadastro" />
        <Input type="text" placeholder="Nome do pet shop" onChange={e => dispatch(addInput('ADD_COMPANY_NAME', e.target.value))} messageBottom="Esse nome visível ao cliente, e no perfil da empresa" />
        <Input type="text" placeholder="Endereço" onChange={e => dispatch(addInput('ADD_STREET', e.target.value))} />
        <Input type="number" placeholder="Número" onChange={e => dispatch(addInput('ADD_PLACENUMBER', e.target.value))} />
        <Input type="text" placeholder="Complemento" onChange={e => dispatch(addInput('ADD_COMPLEMENT', e.target.value))} />
        <Input type="text" placeholder="Bairro" onChange={e => dispatch(addInput('ADD_NEIGHBORHOOD', e.target.value))} />
        <Input type="text" placeholder="CEP" onChange={e => dispatch(addInput('ADD_CEP', e.target.value))} />
        <div className="city-states">
          <div className="city-input">
            <input type="text" placeholder="Cidade" onChange={e => dispatch(addInput('ADD_CITY', e.target.value))} />
          </div>
          <div className="states">
            <input type="text" placeholder="UF" onChange={e => dispatch(addInput('ADD_STATES', e.target.value))} />
          </div>
        </div>
        <ButtonForm text="Continuar cadastro"/>
      </form>
    </div>
  );
}
