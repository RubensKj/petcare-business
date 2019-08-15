import React from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';

import Input from '../../Components/Input';
import ButtonForm from '../../Components/ButtonForm';
import TransitionOfSetting from '../../Components/TransitionOfSetting';

import './styles.css';

export default function SettingsPage() {
  return (
    <>
      <SideBar />
      <div className="container-page-sidebar">
        <HeaderEditPage configuration={true} />
        <div className="container-settings">
          <div className="header-title-settings">
            <h1>Configurações</h1>
          </div>
          <div className="forms-settings">
            <form className="form-image-settings">
              <label for="input-image-company" >
                <img src="https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/36919020_268531707232126_6615945512266760192_n.jpg?_nc_cat=104&_nc_oc=AQkT9OzKnH47MyQHguJZ8Wt38JFTYtrVKfROYDr46Tk2_RGFIGMkcWPXw3UaNS-bwKs&_nc_ht=scontent.fbnu1-1.fna&oh=82722e4b1b45ab3b0563f72bdfee5482&oe=5DEBBFF4" alt="Company Logo" />
              </label>
              <input id="input-image-company" type="file" style={{ display: 'none' }} />
              <ButtonForm text="Alterar imagem" />
            </form>
            <form className="form-content-settings">
              <TransitionOfSetting title="Principais" description="Informações que serão utilizar para mostrar para o usuário;" />
              <Input type="text" placeholder="Nome da empresa" messageBottom="Esse nome será visível para os usuários que acessarem a pagina da empresa." autoComplete="off" />
              <Input type="text" placeholder="CNPJ" messageBottom="Esse CPNJ é qual a empresa foi cadastrada." autoComplete="off" />
              <div className="bottom-border-settings" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
