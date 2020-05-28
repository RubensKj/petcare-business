import React, { useState } from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';

import TitlePages from '../../Components/TitlePages';

import Input from '../../Components/Input';
import TextArea from '../../Components/TextArea';
import ButtonForm from '../../Components/ButtonForm';
import TransitionOfSetting from '../../Components/TransitionOfSetting';

import api from '../../Services/api';

import './styles.css';

export default function CreateService(props) {
  const INITIAL_STATE = {
    name: '',
    description: '',
    price: 0,
  }
  const [service, setService] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, description, price } = service;
    if(!name || !price) {
      setErrors("Preencha todos os dados para cadastrar o produto");
    } else {
      if(name.length <= 0 || name.length > 65) {
        setErrors("Nome do serviço muito extenso");
        return;
      }

      if(description.length < 0 || description.length >= 650) {
        setErrors("Descrição só pode ter no máximo 650 caracteres");
        return;
      }

      if(price <= 0 || price === 20000.00) {
        setErrors("Preço é não válido");
        return;
      }

      await api.post("/create-service", service).then(() => {
        props.history.push('/servicos')
      }).catch(error => {
        switch (error.message) {
          case "Network Error":
            return setErrors("O servidor está temporariamente desligado");
          case "Request failed with status code 403":
            return setErrors("Este nome já está sendo usado.");
          default:
            return setErrors("");
        }
      });
    }
  }

  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <HeaderEditPage requestsPage={true} />
        <div className="container-create-service">
          <TitlePages text="Cadastro de serviço" />
          <form className="create-form-service" onSubmit={handleSubmit}>
            <TransitionOfSetting  errors={errors} title="Serviço" description="Cadastro de serviço, obs: cadastrar todos os serviços relacionados ao pet shop aqui (Ex: Tosa, Banho, Creche etc.)" />
            <div className="inputs">
              <Input type="text" placeholder="Nome do serviço" onChange={e => setService({ ...service, name: e.target.value })}  messageBottom="Nome do serviço que será visível para o usuário na hora de escolher um para a compra." autoComplete="off" />
              <TextArea type="text" placeholder="Descrição." onChange={e => setService({ ...service, description: e.target.value })} />
              <Input type="number" placeholder="Preço" onChange={e => setService({ ...service, price: e.target.value })} min="0" step="any" />
              <ButtonForm text="Criar Serviço" />
            </div>
            <div className="bottom-border-settings" />
          </form>
        </div>
      </div>
    </>
  );
}
