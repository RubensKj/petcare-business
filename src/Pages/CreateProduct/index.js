import React, { useState } from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';

import TitlePages from '../../Components/TitlePages';

import Input from '../../Components/Input';
import InputFileImage from '../../Components/InputFileImage';
import TextArea from '../../Components/TextArea';
import ButtonForm from '../../Components/ButtonForm';
import TransitionOfSetting from '../../Components/TransitionOfSetting';

import './styles.css';

export default function CreateProduct(props) {
  const [image, setImage] = useState('');

  function handleImage(e) {
    e.preventDefault();
    setImage(e.target.files[0].name);
  }

  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <HeaderEditPage editPage={true} />
        <div className="container-create-service">
          <TitlePages text="Cadastro de produto" />
          <form className="create-form-service" onSubmit={null} encType="multipart/form-data">
            <TransitionOfSetting title="Imagem do produto" description="Uma imagem do produto deve ser inserida aqui. Basta clicar e selecionar a imagem desejada." />
            <InputFileImage onChangeText={image} onChange={handleImage} />
            <TransitionOfSetting errors="Error" title="Informações do produto" description="Cadastro de produto, esse produto será visível para o usuário na página de perfil da empresa para compra." />
            <div className="inputs">
              <Input type="text" placeholder="Nome do produto" messageBottom="Nome do serviço que será visível para o usuário na hora de escolher um para a compra." autoComplete="off" />
              <TextArea type="text" placeholder="Descrição." />
              <Input type="number" placeholder="Preço" min="0" step="any" />
              <Input type="text" placeholder="Peso" messageBottom="Necessário colocar a unidade do peso do produto. Ex 150g ou 15kg" autoComplete="off" />
              <Input type="text" placeholder="Indicação" messageBottom="Para quem este produto é indicado. Ex Cachorro, Gato..." autoComplete="off" />
              <Input type="text" placeholder="Idade" messageBottom="Filhote, Adulto, Idosos..." autoComplete="off" />
              <Input type="text" placeholder="Transgênico" autoComplete="off" />
              <TextArea type="text" placeholder="Composição." />
              <ButtonForm text="Criar Produto" />
            </div>
            <div className="bottom-border-settings" />
          </form>
        </div>
      </div>
    </>
  );
}