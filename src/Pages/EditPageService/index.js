import React, { useEffect, useState } from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import Input from '../../Components/Input';
import TextArea from '../../Components/TextArea';
import ButtonForm from '../../Components/ButtonForm';

import api from '../../Services/api';
import { isAuthenticated } from '../../Services/auth';

import './styles.css';

export default function EditPageService(props) {
  const INITIAL_STATE = {
    id: '',
    name: '',
    description: '',
    price: '',
  }
  const [service, setService] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (isAuthenticated()) {
      async function findProduct(id) {
        await api.get(`/services-list/${id}`).then(res => {
          setService(res.data);
        }).catch(error => {
          switch (error.message) {
            case "Network Error":
              return setErrors("O servidor está temporariamente desligado");
            case "Request failed with status code 404":
              return setErrors("Não existe nenhum serviço com este id.");
            case "Request failed with status code 403":
              return props.history.push("/entrar");
            default:
              return setErrors("");
          }
        });
      }
      if (props.match.params.id !== ":id") {
        findProduct(props.match.params.id);
      }
    } else {
      props.history.push('/entrar');
    }
  }, [props.history, props.match.params.id])

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, description, price } = service;
    if (!name || !price) {
      setErrors("Preencha todos os campos necessário para alterar o serviço");
    } else {
      if (name === null || name === undefined || name.length > 65) {
        setErrors("Nome do produto muito extenso");
        return;
      }

      if (description === null || description === undefined || description.length >= 650) {
        setErrors("Descrição só pode ter no máximo 650 caracteres");
        return;
      }

      if (price === null || price === undefined || price === 20000.00) {
        setErrors("Preço é não válido");
        return;
      }

      await api.post(`/edit-service/${service.id}`, service).then(() => {
        props.history.push('/servicos');
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

  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <HeaderEditPage services={true} />
        <div className="container-form-edit-service">
          <div className="product-info-edit-title">
            Editar dados do serviço
          </div>
          <span className="errors-span">{errors}</span>
          <form className="service-edit-form" onSubmit={handleSubmit}>
            <Input type="text" value={service.name} placeholder="Nome do serviço" onChange={e => setService({ ...service, name: e.target.value })} messageBottom="Nome do serviço que será visível para o usuário na hora de escolher um para a compra." />
            <TextArea placeholder="Descrição" value={service.description} onChange={e => setService({ ...service, description: e.target.value })} />
            <Input type="number" value={service.price} placeholder="Preço" onChange={e => setService({ ...service, price: e.target.value })} messageBottom="Utilizar ponto para os centavos." />
            <ButtonForm text="Confirmar Alteração" />
          </form>
        </div>
      </div>
    </>
  );
}
