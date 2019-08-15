import React from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import Input from '../../Components/Input';
import ButtonForm from '../../Components/ButtonForm';

import './styles.css';

export default function EditPage() {
  return (
    <>
      <SideBar />
      <div className="container-page-sidebar">
        <HeaderEditPage editPage={true} />
        <div className="container-form">
          <div className="product-info-edit-title">
            Editar dados do produto
        </div>
          <form className="product-edit-form">
            <Input type="text" placeholder="Nome do produto." />
            <div className="description-area">
              <textarea type="text" placeholder="Descrição." />
            </div>
            <Input type="text" placeholder="Preço." />
            <Input type="text" placeholder="Peso (Ex: 10kg, 10g)." />
            <Input type="text" placeholder="Quantidade em estoque." />
            <ButtonForm text="Confirmar Alteração" />
          </form>
        </div>
      </div>
    </>
  );
}
