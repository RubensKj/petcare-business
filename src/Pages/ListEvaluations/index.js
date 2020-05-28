import React, { useEffect, useState } from 'react';


import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import Loading from '../../Components/Loading';
import EvaluationCard from '../../Components/EvaluationCard';
import BottomLoadMore from '../../Components/BottomLoadMore';

import api from '../../Services/api';

import './styles.css';

export default function ListEvaluations(props) {

  const btnLoadMore = '.btn-loadMore-evaluation';
  const hideClass = 'hide-button-load-more-evaluations';

  const [isLoading, setIsLoading] = useState(true);
  const [evaluations, setEvaluations] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [actPage, setActPage] = useState(0);

  const [numberOfElements, setNumberOfElements] = useState(0);
  const [statusApproved, setStatusApproved] = useState(0);

  async function loadEvaluations(page) {
    await api.get(`/evaluations/${page}`).then(res => {
      setEvaluations(res.data.content);
      setTotalPages(res.data.totalPages);
      setActPage(res.data.number);
      setNumberOfElements(res.data.numberOfElements);
      setIsLoading(false);
      if (res.data.totalPages <= 1) {
        let btn = document.querySelector(btnLoadMore);
        if (btn !== null) {
          btn.classList.add(hideClass);
        }
      }
    });
  }

  useEffect(() => {
    loadEvaluations(0);
  }, []);

  useEffect(() => {
    if ((actPage + 1) >= totalPages && isLoading === false) {
      let btn = document.querySelector(btnLoadMore);
      if (btn !== null) {
        btn.classList.add(hideClass);
      }
    }
  }, [actPage, totalPages, isLoading]);

  async function loadMoreEvaluations(page) {
    await api.get(`/evaluations/${page}`).then(res => {
      setEvaluations(evaluations.concat(res.data.content));
      setNumberOfElements((numberOfElements + res.data.numberOfElements));
      setActPage(res.data.number);
    });
  }

  useEffect(() => {
    if (evaluations.length > 0) {
      let maxNote = (numberOfElements * 5);
      let totalRateByPage = 0;
      evaluations.forEach(evaluation => { totalRateByPage += evaluation.rate; });

      let totalRateX100 = totalRateByPage * 100;
      setStatusApproved((totalRateX100 / maxNote));
    }
  }, [evaluations, numberOfElements]);

  return (
    <>
      <SideBar props={props} />
      <div className="container-page-sidebar">
        <HeaderEditPage evaluation={true} />
        <div className="container-evaluation">
          <div className="header-list-evaluation">
            <div className="status-company-evalution">
              <div className="title-status">
                <h3>Status</h3>
                <div className="little-box-transition" />
              </div>
              <div className="status-bar-evalution">
                <div /*style={{ marginLeft: (statusApproved ? ((statusApproved >= 90 ? (statusApproved - 18) : (statusApproved - 10))) : (0)) + '%' }} */ className="percent"><span>{statusApproved ? (statusApproved.toFixed(1)) : ('0')}% aprovação</span></div>
                <div className="bar-status-evaluation">
                  <div style={{ width: statusApproved + '%' }} className="bar-status" />
                </div>
                <div className="explanation">
                  <span className="icon">*</span>
                  <span className="text-explanation">Esse é o percentual sobre a nota máxima que poderia ter se todos os usuários desta página tivessem dado uma nota 5.0!</span>
                </div>
              </div>
            </div>
            <div className="title-evalution">
              <h3>Avaliações</h3>
              <div className="little-box-transition" />
            </div>
          </div>
          {isLoading ? (<Loading />) : (
            <>
              <div className="container-list-evaluation">
                {evaluations.map(evaluation => <EvaluationCard key={evaluation.id} evaluation={evaluation} />)}
              </div>
              <BottomLoadMore onClick={() => loadMoreEvaluations(actPage + 1)} text="Carregar mais avaliações" setClassName="btn-loadMore-evaluation" />
            </>
          )}
        </div>
      </div>
    </>
  );
}
