import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';


import HeaderEditPage from '../../Components/HeaderEditPage';
import SideBar from '../../Components/SideBar';
import EvaluationCard from '../../Components/EvaluationCard';

import './styles.css';

export default function ListEvaluations(props) {
  // const state = useSelector(state => state.Company);
  // const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
  }, [])

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
                <div style={{ marginLeft: '24%' }} className="percent"><span>30% aprovação</span></div>
                <div className="bar-status-evaluation">
                  <div style={{ width: '30%' }} className="bar-status" />
                </div>
              </div>
            </div>
            <div className="title-evalution">
              <h3>Avaliações</h3>
              <div className="little-box-transition" />
            </div>
          </div>
          <div className="container-list-evaluation">
            <EvaluationCard evaluation={null} />
            <EvaluationCard evaluation={null} />
            <EvaluationCard evaluation={null} />
            <EvaluationCard evaluation={null} />
            <EvaluationCard evaluation={null} />
            <EvaluationCard evaluation={null} />
            <EvaluationCard evaluation={null} />
            <EvaluationCard evaluation={null} />
            <EvaluationCard evaluation={null} />
            <EvaluationCard evaluation={null} />
          </div>
        </div>
      </div>
    </>
  );
}
