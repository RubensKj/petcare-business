import React, { useEffect, useState } from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import SelectRequest from '../../Components/SelectRequest';
import ServiceCard from '../../Components/ServiceCard';
import ProductCard from '../../Components/ProductCard';
import BottomLoadMore from '../../Components/BottomLoadMore';

import api from '../../Services/api';

import './styles.css';

export default function Order(props) {

  // LOAD DIVS
  const btnLoadServices = '.btn-loadServices';
  const btnLoadProduct = '.btn-loadProducts';
  const hideButtons = 'hide-buttons-load-more';

  // INFORMATION FROM ORDER
  const [order, setOrder] = useState({});
  const [date, setDate] = useState('');
  const [statusWord, setStatusWord] = useState('');
  const [status, setStatus] = useState(0);

  // SERVICES
  const [services, setServices] = useState([]);
  const [totalPagesService, setTotalPagesService] = useState(0);
  const [actPageService, setActPageService] = useState(0);
  
  // PRODUCTS
  const [products, setProducts] = useState([]);
  const [totalPagesProduct, setTotalPagesProduct] = useState(0);
  const [actPageProduct, setActPageProduct] = useState(0);

  async function loadOrderById(id) {
    await api.get(`/orders-to-company/${id}`).then(res => {
      setOrder(res.data);
      setDate(res.data.createdOrderAt.split("-").join("/"));
      switch (res.data.statusOrder) {
        case 'NOT_PAID':
          return setStatusWord("Pendente");
        case 'PAID':
          setStatusWord("Pagamento aprovado");
          return setStatus(1);
        case 'PROCESS':
          setStatusWord("Em andamento");
          return setStatus(2);
        case 'DEVELIVERYING':
          setStatusWord("Pronto pra entrega");
          return setStatus(3);
        case 'FINISHED':
          setStatusWord("Finalizado");
          return setStatus(4);
        default:
          return 0;
      }
    });
  }

  async function loadServicesFromOrder(id, page) {
    await api.get(`/order-services/${id}/${page}`).then(res => {
      setServices(res.data.content);
      setTotalPagesService(res.data.totalPages);
      setActPageService(res.data.number);
    });
  }

  async function loadProductsFromOrder(id, page) {
    await api.get(`/order-products/${id}/${page}`).then(res => {
      setProducts(res.data.content);
      setTotalPagesProduct(res.data.totalPages);
      setActPageProduct(res.data.number);
    });
  }

  useEffect(() => {
    loadOrderById(props.match.params.id);
    if (order.id !== undefined && order.id !== null) {
      loadServicesFromOrder(order.id, 0);
      loadProductsFromOrder(order.id, 0);
    }
  }, [props.match.params.id, order.id]);

  useEffect(() => {
    switch (status) {
      case 0:
        return setStatusWord("Pendente");
      case 1:
        return setStatusWord("Pagamento aprovado");
      case 2:
        return setStatusWord("Em andamento");
      case 3:
        return setStatusWord("Pronto pra entrega");
      case 4:
        return setStatusWord("Finalizado");
      default:
        return "";
    }
  }, [status])

  async function handleNextProcess(id, numberProcess) {
    if ((numberProcess + 1) >= 5) {
      props.history.push('/pedidos');
    } else {
      await api.put(`/orders-process/${id}/${(numberProcess + 1)}`);
      setStatus(numberProcess + 1);
    }
  }

  useEffect(() => {
    if((actPageService + 1) >= totalPagesService) {
      let btn = document.querySelector(btnLoadServices);
      if (btn !== null) {
        btn.classList.add(hideButtons);
      }
    }
  }, [actPageService, totalPagesService]);

  async function loadMoreServices(id, page) {
    await api.get(`/order-services/${id}/${page}`).then(res => {
      setServices(services.concat(res.data.content));
      setActPageService(res.data.number);
    });
  }

  useEffect(() => {
    if((actPageProduct + 1) >= totalPagesProduct) {
      let btn = document.querySelector(btnLoadProduct);
      if (btn !== null) {
        btn.classList.add(hideButtons);
      }
    }
  }, [actPageProduct, totalPagesProduct]);

  async function loadMoreProducts(id, page) {
    await api.get(`/order-products/${id}/${page}`).then(res => {
      setProducts(products.concat(res.data.content));
      setActPageProduct(res.data.number);
    });
  }

  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <HeaderEditPage requestsPage={true} />
        <div className="container-request">
          <div className="request-item">
            <div className="header-request">
              <div className="person-information">
                <h3 className="name-person">{order.userCompleteName === undefined ? ('Carregando..') : (order.userCompleteName)}</h3>
              </div>
              <SelectRequest status={status} onClick={() => handleNextProcess(order.id, status)} />
            </div>
            <div className="request-information">
              <div className="header-request-information">
                <div className="number-status">
                  <div className="header-request-number">
                    <h3>Pedido: </h3>
                    <span>{'#' + (order.id === undefined ? (' Carregando..') : (order.id))}</span>
                  </div>
                  <div className="area-info">
                    <h3>Subtotal: </h3>
                    <span>{'R$ ' + (order.subTotal === undefined ? (' Carregando..') : (order.subTotal))}</span>
                  </div>
                  <div className="area-info">
                    <h3>Total: </h3>
                    <span>{'R$ ' + (order.total === undefined ? (' Carregando..') : (order.total))}</span>
                  </div>
                  <div className="status">
                    <h3>Status:</h3>
                    <span>{statusWord}</span>
                  </div>
                </div>
                <div className="realized">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>{date}</span>
                </div>
              </div>
              <div className="title-lists-header">
                {services.length > 0 ? (
                  <div className="title-services">
                    <h3>Serviços</h3>
                  </div>
                ) : ('')}
                {products.length > 0 ? (
                  <div className="title-product">
                    <h3>Produtos</h3>
                  </div>
                ) : ('')}
              </div>
              <div className="lists">
                {services.length > 0 ? (
                  <>
                    <div className="title-lists firstTitle">
                      <h3>Serviços</h3>
                    </div>
                    <div className="services">
                      <div className="list-services">
                        {services.map(service => <ServiceCard key={service.id} service={service} />)}
                      </div>
                      <BottomLoadMore onClick={() => loadMoreServices(order.id, (actPageService + 1))} setClassName="btn-loadServices" text="Carregar mais serviços" />
                    </div>
                  </>
                ) : ('')}
                {products.length > 0 ? (
                  <>
                    <div className="title-lists">
                      <h3>Produtos</h3>
                    </div>
                    <div className="products">
                      <div className="list-products">
                        {products.map(product => <ProductCard key={product.id} product={product} actionThreeDots={false} />)}
                      </div>
                      <BottomLoadMore onClick={() => loadMoreProducts(order.id, (actPageProduct + 1))} setClassName="btn-loadProducts" text="Carregar mais produtos" />
                    </div>
                  </>
                ) : ('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
