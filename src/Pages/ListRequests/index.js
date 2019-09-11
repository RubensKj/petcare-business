import React, { useEffect, useState } from 'react';

import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import SearchBox from '../../Components/SearchBox';
import OrderCard from '../../Components/OrderCard';
import Loading from '../../Components/Loading';

import api from '../../Services/api';

import { searchInList } from '../../Helpers/Functions';

import './styles.css';

export default function ListRequests(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [actPage, setActPage] = useState(0);

  async function loadOrdersFromCompany(page) {
    await api.get(`/get-orders-company/${page}`).then(res => {
      setOrders(res.data.content);
      setTotalPages(res.data.totalPages);
      setActPage(res.data.number);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    loadOrdersFromCompany(0);
  }, []);

  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <HeaderEditPage requestsPage={true} />
        <div className="container-requests">
          <SearchBox searchMethod={(e) => searchInList(e, "input-search-search-box", "container-list-requests", "request", "name-person")} placeholder="Pesquise por um pedido" />
          {isLoading ? (<Loading />) : (
            <>
              <div id="container-list-requests" className="container-list-requests">
                {orders.map(order => <OrderCard key={order.id} order={order} />)}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
