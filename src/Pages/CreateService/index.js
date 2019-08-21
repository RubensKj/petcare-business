import React from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';

import TitlePages from '../../Components/TitlePages';

import Input from '../../Components/Input';
import TextArea from '../../Components/TextArea';
import ButtonForm from '../../Components/ButtonForm';
import TransitionOfSetting from '../../Components/TransitionOfSetting';

import './styles.css';

export default function CreateService(props) {
  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <HeaderEditPage requestsPage={true} />
        <div className="container-create-service">
          <TitlePages text="Cadastro de serviço" />
          <form className="create-form-service" onSubmit={null}>
            <TransitionOfSetting title="Serviço" description="Cadastro de serviço, obs: cadastrar todos os serviços relacionados ao pet shop aqui (Ex: Tosa, Banho, Creche etc.)" />
            <div className="inputs">
              <Input type="text" placeholder="Nome do serviço" messageBottom="Nome do serviço que será visível para o usuário na hora de escolher um para a compra." autoComplete="off" />
              <TextArea type="text" placeholder="Descrição." />
              <Input type="number" placeholder="Preço" min="0" step="any" />
              <ButtonForm text="Criar Serviço" />
            </div>
            <div className="bottom-border-settings" />
          </form>
        </div>
      </div>
    </>
  );
}
