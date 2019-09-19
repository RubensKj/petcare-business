import React, { useEffect, useState } from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';

import TitlePages from '../../Components/TitlePages';

import Input from '../../Components/Input';
import TextArea from '../../Components/TextArea';
import ButtonForm from '../../Components/ButtonForm';
import TransitionOfSetting from '../../Components/TransitionOfSetting';

import PetShopDogLogo from '../../Assets/PetShopDogLogo.svg';

import api from '../../Services/api';
import { isAuthenticated } from '../../Services/auth';

import './styles.css';

export default function SettingsPage(props) {
  const INITIAL_STATE = {
    cnpj: '',
    companyName: '',
    description: '',
    avatar: '',
    address: {
      placeNumber: 0,
      street: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      cep: '',
    },
  }
  const [company, setCompany] = useState(INITIAL_STATE);
  const [errorsImage, setErrorsImage] = useState('');
  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (isAuthenticated()) {
      loadCompany();
    } else {
      props.history.push('/entrar');
    }
  }, [props.history]);

  async function loadCompany() {
    await api.get("/profile-company").then(res => {
      setCompany(res.data);
    }).catch(error => {
      console.log(error);
    });
  }

  async function handleImage(e) {
    e.preventDefault();
    if(e.target.files[0] !== undefined && e.target.files[0].name !== null  && (e.target.files[0].name.includes(".jpeg") || e.target.files[0].name.includes(".jpg") || e.target.files[0].name.includes(".png"))) {
      let data = new FormData();
      data.append('file', e.target.files[0]);
      await api.post(`/change-company-image/${company.id}`, data).then(() => {
        props.history.push('/configuracoes');
        setErrorsImage("Imagem alterada com sucesso.");
      });
    } else {
      setErrorsImage("Formato de imagem errado.");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { cnpj, companyName, description } = company;
    const { street, placeNumber, complement, neighborhood, cep, city, state } = company.address;
    if (!cnpj || !companyName || !street || !placeNumber || !neighborhood || !cep || !city || !state) {
      setErrors("Preencha todos os dados para continuar o cadastro");
    } else {
      if (cnpj < 0 || cnpj.length > 18) {
        setErrors("CNPJ é inválido, favor inserir um correto.");
        return;
      }

      if (companyName.length <= 0 || companyName.length > 250) {
        setErrors("Digite um nome válido");
        return;
      }

      if (description === null || description === undefined || description.length >= 350) {
        setErrors("Descrição muito extensa.");
        return;
      }

      if (street.length > 250) {
        setErrors("Rua inválida");
        return;
      }

      if (placeNumber < 0 || placeNumber > 20000) {
        setErrors("Número inválido");
        return;
      }

      if (complement.length >= 100) {
        setErrors("Complemento muito extenso");
        return;
      }

      if (neighborhood.length > 250) {
        setErrors("Bairro inválido");
        return;
      }

      if (cep.length > 9) {
        setErrors("CEP inválido");
        return;
      }

      if (state.length > 4) {
        setErrors("Estado inválido");
        return;
      }

      await api.post(`/edit-company/${company.id}`, JSON.stringify(company)).then(() => {
        props.history.push('/dashboard');
      }).catch(error => {
        switch (error.message) {
          case "Network Error":
            return setErrors("O servidor está temporariamente desligado");
          case "Request failed with status code 404":
            return setErrors("Não existe nenhuma empresa com este id.");
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
        <HeaderEditPage configuration={true} />
        <div className="container-settings">
          <TitlePages text="Configurações" />
          <div className="forms-settings">
            <form className="form-image-settings" encType="multipart/form-data">
              <TransitionOfSetting errors={errorsImage} title="Avatar" description="Essa logo será visível para quem acessar esta empresa." />
              <label htmlFor="input-image-company" >
                <img src={company.avatar ? (company.avatar) : (PetShopDogLogo)} alt="Company Logo" />
              </label>
              <input id="input-image-company" type="file" style={{ display: 'none' }} onChange={handleImage} enctyp="multipart/form-data" />
            </form>
            <form className="form-content-settings" onSubmit={handleSubmit}>
              <TransitionOfSetting errors={errors} title="Principais" description="Informações que serão utilizadas para mostrar para o usuário;" />
              <Input type="text" value={company.cnpj} onChange={e => setCompany({ ...company, cnpj: e.target.value })} placeholder="CNPJ" messageBottom="Esse CPNJ é qual a empresa foi cadastrada., mas ele não pode ser alterado" autoComplete="off" disabled={true} />
              <Input type="text" value={company.companyName} placeholder="Nome da empresa" onChange={e => setCompany({ ...company, companyName: e.target.value })} messageBottom="Esse nome será visível para os usuários que acessarem a pagina da empresa" autoComplete="off" />
              <div className="text-area-area">
                <TextArea value={company.description} placeholder="Descrição" onChange={e => setCompany({ ...company, description: e.target.value })} />
              </div>
              <Input type="text" value={company.address.street} placeholder="Endereço" onChange={e => setCompany({ ...company, address: { ...company.address, street: e.target.value } })} messageBottom="Endereço em que a empresa foi cadastrada" autoComplete="off" />
              <Input type="number" value={company.address.placeNumber} placeholder="Número" onChange={e => setCompany({ ...company, address: { ...company.address, placeNumber: e.target.value } })} messageBottom="Número do estabelecimento" autoComplete="off" max="20000" />
              <Input type="text" value={company.address.complement} placeholder="Complemento" onChange={e => setCompany({ ...company, address: { ...company.address, complement: e.target.value } })} messageBottom="Complemento do estabelecimento" autoComplete="off" />
              <Input type="text" value={company.address.neighborhood} placeholder="Bairro" onChange={e => setCompany({ ...company, address: { ...company.address, neighborhood: e.target.value } })} autoComplete="off" />
              <Input type="text" value={company.address.cep} placeholder="CEP" onChange={e => setCompany({ ...company, address: { ...company.address, cep: e.target.value } })} autoComplete="off" />
              <div className="city-states">
                <div className="city-input inputed">
                  <input type="text" value={company.address.city} placeholder="Cidade" onChange={e => setCompany({ ...company, address: { ...company.address, city: e.target.value } })} />
                </div>
                <div className="states inputed">
                  <input type="text" value={company.address.state} placeholder="UF" onChange={e => setCompany({ ...company, address: { ...company.address, state: e.target.value } })} />
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
