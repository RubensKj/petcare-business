import React, { useEffect, useState } from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import Input from '../../Components/Input';
import InputFileImage from '../../Components/InputFileImage';
import TextArea from '../../Components/TextArea';
import ButtonForm from '../../Components/ButtonForm';

import api from '../../Services/api';
import { isAuthenticated } from '../../Services/auth';

import './styles.css';

export default function EditPage(props) {
  const INITIAL_STATE = {
    id: '',
    name: '',
    description: '',
    price: 0,
    quantityStore: 0,
    weight: '',
    indicationPet: '',
    porte: '',
    age: '',
    transgenic: '',
    composition: '',
    avatar: '',
    file: '',
  }
  const [product, setProduct] = useState(INITIAL_STATE);
  const [ImageShow, setImageShow] = useState('');
  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (isAuthenticated()) {
      async function findProduct(id) {
        await api.get(`/products-list/${id}`).then(res => {
          setProduct(res.data);
          setImageShow(res.data.avatar);
        }).catch(error => {
          switch (error.message) {
            case "Network Error":
              return setErrors("O servidor está temporariamente desligado");
            case "Request failed with status code 404":
              return setErrors("Não existe nenhum produto com este id.");
            case "Request failed with status code 403":
              return props.history.push("/entrar");
            default:
              return setErrors("");
          }
        });
      }
      if(props.match.params.id !== ":id") {
        findProduct(props.match.params.id);
      }
    } else {
      props.history.push('/entrar');
    }
  }, [props.history, props.match.params.id])

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, description, price, indicationPet, porte, age, composition, quantityStore } = product;
    if (!name || !price || !indicationPet || !porte || !age || !quantityStore) {
      setErrors("Preencha todos os dados para cadastrar o produto");
    } else {
      if (name === null || name === undefined || name.length > 65) {
        setErrors("Nome do produto muito extenso");
        return;
      }

      if (description === null || description === undefined || description.length >= 650) {
        setErrors("Descrição só pode ter no máximo 650 caracteres");
        return;
      }

      if (price === null || price === undefined || price <= 0 || price === 20000.00) {
        setErrors("Preço é não válido");
        return;
      }

      if (quantityStore === null || quantityStore === undefined || quantityStore <= 0 || quantityStore > 5000) {
        setErrors("Quantidade em estoque não válida");
        return;
      }

      if (indicationPet === null || indicationPet === undefined || indicationPet.length >= 100) {
        setErrors("Indicação muito extensa");
        return;
      }

      if (porte === null || porte === undefined || porte.length >= 50) {
        setErrors("Porte muito extensa");
        return;
      }

      if (age === null || age === undefined || age.length >= 35) {
        setErrors("Idade muito extensa");
        return;
      }

      if (composition === null || composition === undefined || composition.length >= 650) {
        setErrors("Composição muito extensa");
        return;
      }

      let data = new FormData();
      data.append('name', product.name);
      data.append('description', product.description);
      data.append('price', product.price);
      data.append('weight', product.weight);
      data.append('indicationPet', product.indicationPet);
      data.append('porte', product.porte);
      data.append('age', product.age);
      data.append('transgenic', product.transgenic);
      data.append('composition', product.composition);
      data.append('quantityStore', product.quantityStore);
      data.append('avatar', product.avatar);
      data.append('file', product.file);

      await api.post(`/edit-product/${product.id}`, data).then(() => {
        props.history.push('/produtos');
      }).catch(error => {
        switch (error.message) {
          case "Network Error":
            return setErrors("O servidor está temporariamente desligado");
          case "Request failed with status code 404":
            return setErrors("Não existe nenhum produto com este id.");
          case "Request failed with status code 403":
            return props.history.push("/entrar");
          default:
            return setErrors("");
        }
      });
    }
  }


  const [textImage, setTextImage] = useState('');

  function handleImage(e) {
    e.preventDefault();
    setProduct({ ...product, file: e.target.files[0] });
    setTextImage(e.target.files[0].name);
  }


  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <HeaderEditPage editPage={true} />
        <div className="container-form">
          <div className="product-info-edit-title">
            Editar dados do produto
          </div>
          <span>{errors}</span>
          <form className="product-edit-form" onSubmit={handleSubmit}>
            <InputFileImage onChangeText={textImage} image={ImageShow} onChange={handleImage} />
            <Input type="text" value={product.name ? (product.name) : ('')} placeholder="Nome do produto" onChange={e => setProduct({ ...product, name: e.target.value })} messageBottom="Nome do serviço que será visível para o usuário na hora de escolher um para a compra." autoComplete="off" />
            <TextArea type="text" value={product.description ? (product.description) : ('')} placeholder="Descrição (Opcional)" onChange={e => setProduct({ ...product, description: e.target.value })} />
            <Input type="number" value={product.price ? (product.price) : (0)} placeholder="Preço" onChange={e => setProduct({ ...product, price: e.target.value })} step="any" />
            <Input type="number" value={product.quantityStore ? (product.quantityStore) : (0)} placeholder="Quantidade em estoque" onChange={e => setProduct({ ...product, quantityStore: e.target.value })} step="any" />
            <Input type="text" value={product.weight ? (product.weight) : ('')} placeholder="Peso" onChange={e => setProduct({ ...product, weight: e.target.value })} messageBottom="Necessário colocar a unidade do peso do produto. Ex 150g ou 15kg" autoComplete="off" />
            <Input type="text" value={product.indicationPet ? (product.indicationPet) : ('')} placeholder="Indicação" onChange={e => setProduct({ ...product, indicationPet: e.target.value })} messageBottom="Para quem este produto é indicado. Ex Cachorro, Gato..." autoComplete="off" />
            <Input type="text" value={product.porte ? (product.porte) : ('')} placeholder="Porte" onChange={e => setProduct({ ...product, porte: e.target.value })} messageBottom="Qual é o porte do animal. Ex Pequeno, Médio ou Grande" autoComplete="off" />
            <Input type="text" value={product.age ? (product.age) : ('')} placeholder="Idade" onChange={e => setProduct({ ...product, age: e.target.value })} messageBottom="Filhote, Adulto, Idosos..." autoComplete="off" />
            <Input type="text" value={product.transgenic ? (product.transgenic) : ('')} placeholder="Transgênico" onChange={e => setProduct({ ...product, transgenic: e.target.value })} autoComplete="off" />
            <TextArea type="text" value={product.composition ? (product.composition) : ('')} placeholder="Composição." onChange={e => setProduct({ ...product, composition: e.target.value })} />
            <ButtonForm text="Confirmar Alteração" />
          </form>
        </div>
      </div>
    </>
  );
}
