import React from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import Input from '../../Components/Input';
import TextArea from '../../Components/TextArea';
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
            <Input type="text" placeholder="Nome do produto" messageBottom="Nome do serviço que será visível para o usuário na hora de escolher um para a compra." autoComplete="off" />
            <TextArea type="text" placeholder="Descrição." />
            <Input type="number" placeholder="Preço" min="0" step="any" />
            <Input type="text" placeholder="Peso" messageBottom="Necessário colocar a unidade do peso do produto. Ex 150g ou 15kg" autoComplete="off" />
            <Input type="text" placeholder="Indicação" messageBottom="Para quem este produto é indicado. Ex Cachorro, Gato..." autoComplete="off" />
            <Input type="text" placeholder="Idade" messageBottom="Filhote, Adulto, Idosos..." autoComplete="off" />
            <Input type="text" placeholder="Transgênico" autoComplete="off" />
            <TextArea type="text" placeholder="Composição." />
            <ButtonForm text="Confirmar Alteração" />
          </form>
        </div>
      </div>
    </>
  );
}
