import React from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';

import TitlePages from '../../Components/TitlePages';

import Input from '../../Components/Input';
import TextArea from '../../Components/TextArea';
import ButtonForm from '../../Components/ButtonForm';
import TransitionOfSetting from '../../Components/TransitionOfSetting';

import './styles.css';

export default function CreateProduct() {
  return (
    <>
      <SideBar />
      <div className="container-page-sidebar">
        <HeaderEditPage requestsPage={true} />
        <div className="container-create-service">
          <TitlePages text="Cadastro de produto" />
          <form className="create-form-service" onSubmit={null} >
            <TransitionOfSetting title="Produto" description="Cadastro de produto, esse produto será visível para o usuário na página de perfil da empresa para compra." />
            <div className="inputs">
              <Input type="text" placeholder="Nome do produto" messageBottom="Nome do serviço que será visível para o usuário na hora de escolher um para a compra." autoComplete="off" />
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