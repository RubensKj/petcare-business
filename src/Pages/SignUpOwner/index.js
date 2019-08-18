import React, { useEffect } from 'react';

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

  useEffect(() => {
    if (stateLocal === null) {
      props.history.push('/cadastrar');
    }

    console.log(stateSignUp)
  }, [props.history, stateLocal, dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { cpf, password } = stateSignUp.registerUser;
    if (!cpf || !password) {
      dispatch(addErrors("Preencha todos os dados para continuar o cadastro"));
      addAnimationToInput();
    } else {
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

      const mergeState = { ...stateLocal }
      const { completeName, email, phoneNumber, companyName, cnpj, cep, city, placeNumber, state, street } = stateSignUp.registerUser;
      if (!completeName || !email || !phoneNumber || !companyName || !cnpj || !cep || !city || !placeNumber || !state || !street) {
        dispatch(addState(mergeState));
      }

      try {
        await api.post("/signup-petshop", JSON.stringify(stateSignUp.registerUser));
        dispatch(addErrors(''));
        dispatch(changePhase(3));
        localStorage.removeItem('state');
        localStorage.removeItem('completeName');
        props.history.push('/entrar')
      } catch (err) {
        dispatch(addErrors("Este CPF já está sendo usado"));
      }
    }
  }

  return (
    <div className="container-signup-phasethree">
      <HeaderBoxAuth message="Sobre o dono" />
      <form className="form-phasethree" onSubmit={handleSubmit} autoComplete="off" autoCapitalize="off" autoCorrect="off">
        <div className="error-area">
          <h3 className="error-signup">{stateSignUp.error}</h3>
        </div>
        <Input type="readOnly" messageBottom="Nome completo do dono da empresa" />
        <Input type="text" placeholder="CPF" onChange={e => dispatch(addInput('ADD_CPF', e.target.value))} messageBottom="O CPF deve ser o do dono da empresa" />
        <Input type="password" placeholder="Senha" onChange={e => dispatch(addInput('ADD_PASSWORD', e.target.value))} messageBottom="Senha que será utilizada para entrar no sistema da empresa" autoComplete="on" />
        <ButtonForm text="Finalizar" />
      </form>
    </div>
  );
}
