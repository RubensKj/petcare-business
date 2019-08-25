import React, { useState } from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';

import TitlePages from '../../Components/TitlePages';

import Input from '../../Components/Input';
import InputFileImage from '../../Components/InputFileImage';
import TextArea from '../../Components/TextArea';
import ButtonForm from '../../Components/ButtonForm';
import TransitionOfSetting from '../../Components/TransitionOfSetting';

import api from '../../Services/api';

import './styles.css';

export default function CreateProduct(props) {
  const INITIAL_STATE = {
    avatar: '',
    name: '',
    description: '',
    price: 0,
    weight: 0,
    indicationPet: '',
    porte: '',
    age: '',
    transgenic: '',
    composition: '',
    quantityStore: 0,
  }
  const [product, setProduct] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState('');
  const [textImage, setTextImage] = useState('');

  function handleImage(e) {
    e.preventDefault();
    setProduct({ ...product, avatar: e.target.files[0] });
    setTextImage(e.target.files[0].name);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, description, price, indicationPet, porte, age, composition, quantityStore } = product;
    if(!name || !price || !indicationPet || !porte || !age || !composition || !quantityStore) {
      setErrors("Preencha todos os dados para cadastrar o produto");
    } else {
      if(name.length <= 0 || name.length > 65) {
        setErrors("Nome do produto muito extenso");
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

      if(quantityStore <= 0 || quantityStore > 5000) {
        setErrors("Quantidade em estoque não válida");
        return;
      }

      if(indicationPet.length <= 0 || indicationPet.length >= 100) {
        setErrors("Indicação muito extensa");
        return;
      }

      if(porte.length <= 0 || porte.length >= 50) {
        setErrors("Porte muito extensa");
        return;
      }

      if(age.length <= 0 || age.length >= 35) {
        setErrors("Idade muito extensa");
        return;
      }

      if(composition.length <= 0 || composition.length >= 650) {
        setErrors("Composição muito extensa");
        return;
      }

      let data = new FormData();
      data.append('name', product.name)
      data.append('description', product.description)
      data.append('price', product.price)
      data.append('weight', product.weight)
      data.append('indicationPet', product.indicationPet)
      data.append('porte', product.porte)
      data.append('age', product.age)
      data.append('transgenic', product.transgenic)
      data.append('composition', product.composition)
      data.append('quantityStore', product.quantityStore)
      data.append('file', product.avatar)

      await api.post("/create-product", data).then(() => {
        props.history.push('/produtos')
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
        <HeaderEditPage editPage={true} />
        <div className="container-create-service">
          <TitlePages text="Cadastro de produto" />
          <form className="create-form-service" onSubmit={handleSubmit} encType="multipart/form-data">
            <TransitionOfSetting title="Imagem do produto" description="Uma imagem do produto deve ser inserida aqui. Basta clicar e selecionar a imagem desejada." />
            <InputFileImage onChangeText={textImage} onChange={handleImage} />
            <TransitionOfSetting errors={errors} title="Informações do produto" description="Cadastro de produto, esse produto será visível para o usuário na página de perfil da empresa para compra." />
            <div className="inputs">
              <Input type="text" placeholder="Nome do produto" onChange={e => setProduct({ ...product, name: e.target.value })} messageBottom="Nome do serviço que será visível para o usuário na hora de escolher um para a compra." autoComplete="off" />
              <TextArea type="text" value={product.description} placeholder="Descrição. (Opcional)" onChange={e => setProduct({ ...product, description: e.target.value })} />
              <Input type="number" placeholder="Preço" onChange={e => setProduct({ ...product, price: e.target.value })} min="0" step="any" />
              <Input type="number" placeholder="Quantidade em estoque" onChange={e => setProduct({ ...product, quantityStore: e.target.value })} min="0" step="no" messageBottom="Quantidade de itens que iram para o estoque" />
              <Input type="text" placeholder="Peso" onChange={e => setProduct({ ...product, weight: e.target.value })} messageBottom="Necessário colocar a unidade do peso do produto. Ex 150g ou 15kg" autoComplete="off" />
              <Input type="text" placeholder="Indicação" onChange={e => setProduct({ ...product, indicationPet: e.target.value })} messageBottom="Para quem este produto é indicado. Ex Cachorro, Gato..." autoComplete="off" />
              <Input type="text" placeholder="Porte" onChange={e => setProduct({ ...product, porte: e.target.value })} messageBottom="Qual é o porte do animal. Ex Pequeno, Médio ou Grande" autoComplete="off" />
              <Input type="text" placeholder="Idade" onChange={e => setProduct({ ...product, age: e.target.value })} messageBottom="Filhote, Adulto, Idosos..." autoComplete="off" />
              <Input type="text" placeholder="Transgênico" onChange={e => setProduct({ ...product, transgenic: e.target.value })} autoComplete="off" />
              <TextArea type="text" value={product.composition} placeholder="Composição." onChange={e => setProduct({ ...product, composition: e.target.value })} />
              <ButtonForm text="Criar Produto" />
            </div>
            <div className="bottom-border-settings" />
          </form>
        </div>
      </div>
    </>
  );
}