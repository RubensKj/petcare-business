import React from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import Input from '../../Components/Input';
import TextArea from '../../Components/TextArea';
import ButtonForm from '../../Components/ButtonForm';

import './styles.css';

export default function EditPageService(props) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Boa tarde pessoal do Entra21");
  }

  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <HeaderEditPage services={true} />
        <div className="container-form-edit-service">
          <div className="product-info-edit-title">
            Editar dados do serviço
          </div>
          <span className="errors-span">Erroooo</span>
          <form className="service-edit-form" onSubmit={handleSubmit}>
            <Input type="text" placeholder="Nome do serviço" messageBottom="Nome do serviço que será visível para o usuário na hora de escolher um para a compra." />
            <TextArea placeholder="Descrição" />
            <Input type="number" placeholder="Preço" messageBottom="Utilizar ponto para os centavos." />
            <ButtonForm text="Confirmar Alteração" />
          </form>
        </div>
      </div>
    </>
  );
}
