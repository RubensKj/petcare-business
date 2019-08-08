import React from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';

import './styles.css';

export default function EditPage() {
  return (
    <div className="container-page-sidebar">
      <HeaderEditPage editPage={true} />
      <div className="container-form">
        <div className="product-info-edit-title">
          Editar dados do produto
        </div>
        <form className="product-edit-form">
          <div className="input-area">
            <input type="text" placeholder="Nome do produto." />
          </div>
          <div className="description-area">
            <textarea type="text" placeholder="Descrição." />
          </div>
          <div className="input-area">
            <input type="text" placeholder="Preço." />
          </div>
          <div className="input-area">
            <input type="text" placeholder="Peso (Ex: 10kg, 10g)." />
          </div>
          <div className="input-area">
            <input type="text" placeholder="Quantidade em estoque." />
          </div>
          <div className="button-area">
            <button className="button-update-product" type="submit">Confirmar Alteração</button>
          </div>
        </form>
      </div>
    </div>
  );
}
