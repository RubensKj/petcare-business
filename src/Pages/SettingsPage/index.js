import React, { useEffect, useState } from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';

import TitlePages from '../../Components/TitlePages';

import Input from '../../Components/Input';
import ButtonForm from '../../Components/ButtonForm';
import TransitionOfSetting from '../../Components/TransitionOfSetting';

import PetShopDogLogo from '../../Assets/PetShopDogLogo.svg';

import { useSelector } from 'react-redux';

import './styles.css';

export default function SettingsPage(props) {
  const INITIAL_STATE = {
    companyName: '',
    description: '',
    avatar: '',
    addresses: [
      {
        placeNumber: 0,
        street: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        cep: '',
      }
    ],
  }
  const state = useSelector(state => state.Company.data);
  const [company, setCompany] = useState(INITIAL_STATE);

  function handleImage(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <HeaderEditPage configuration={true} />
        <div className="container-settings">
          <TitlePages text="Configurações" />
          <div className="forms-settings">
            <form className="form-image-settings" encType="multipart/form-data">
              <TransitionOfSetting title="Avatar" description="Essa logo será visível para quem acessar esta empresa." />
              <label htmlFor="input-image-company" >
                <img src={state.avatar ? (state.avatar) : (PetShopDogLogo)} alt="Company Logo" />
              </label>
              <input id="input-image-company" type="file" style={{ display: 'none' }} onChange={handleImage} />
            </form>
            <form className="form-content-settings">
              <TransitionOfSetting title="Principais" description="Informações que serão utilizadas para mostrar para o usuário;" />
              <Input type="text" value={state.cnpj} placeholder="CNPJ" messageBottom="Esse CPNJ é qual a empresa foi cadastrada., mas ele não pode ser alterado" autoComplete="off" disabled={true} />
              <Input type="text" placeholder="Nome da empresa" messageBottom="Esse nome será visível para os usuários que acessarem a pagina da empresa" autoComplete="off" />
              <Input type="text" placeholder="Endereço" messageBottom="Endereço em que a empresa foi cadastrada" autoComplete="off" />
              <Input type="text" placeholder="Número" messageBottom="Número do estabelecimento" autoComplete="off" />
              <Input type="text" placeholder="Complemento" messageBottom="Complemento do estabelecimento" autoComplete="off" />
              <Input type="text" placeholder="Bairro" autoComplete="off" />
              <Input type="text" placeholder="CEP" autoComplete="off" />
              <div className="city-states">
                <div className="city-input inputed">
                  <input type="text" placeholder="Cidade" onChange={e => false} />
                </div>
                <div className="states inputed">
                  <input type="text" placeholder="UF" onChange={e => false} />
                </div>
              </div>
              <ButtonForm text="Alterar dados da empresa" />
              <div className="bottom-border-settings" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
