import React from 'react';

import './styles.css';

export default function ServiceCard({ service, handleDelete, actionThreeDots }) {

  function openDropDown(id) {
    let dropdownID = "#dropdown-service-card-" + id;
    let dropdown = document.querySelector(dropdownID);
    dropdown.classList.toggle("openDropDownService");
  }

  window.onclick = function (event) {
    let matches = event.target.matches ? event.target.matches('.action-open-dropdown-service') || event.target.matches('.svg-btn-service-card') || event.target.matches('.svg-btn-service-card>circle') : event.target.msMatchesSelector('.action-open-dropdown-service') || event.target.msMatchesSelector('.svg-btn-service-card') || event.target.msMatchesSelector('.svg-btn-service-card>circle');
    if (!matches) {
      var dropdowns = document.getElementsByClassName("dropdown-menu-service");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("openDropDownService")) {
          openDropdown.classList.remove("openDropDownService");
        }
      }
    }
  };

  return (
    <div className="service-card">
      <div className="service-information">
        <div className="title-service">
          <h3>{service.name}</h3>
        </div>
        <div className="description-service">
          <p>{service.description}</p>
        </div>
        <div className="footer-service-card">
          <div className="price-service">
            <p className="unity">R$</p>
            <p>{service.price}</p>
          </div>
          {actionThreeDots ? (
            <div className="actions-product">
              <button className="action-open-dropdown-service" onClick={() => openDropDown(service.id)}>
                <svg className="svg-btn-service-card" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
              </button>
              <div id={`dropdown-service-card-${service.id}`} className="dropdown-menu-service">
                <ul>
                  <li role="button" onClick={() => handleDelete(service.id)}>
                    <div className="delete-button">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                      <span>Deletar</span>
                    </div>
                  </li>
                  <a href={`/servicos/${service.id}/editar`}>
                    <li>
                      <div className="edit-button">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                        <span>Editar</span>
                      </div>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          ) : ('')}
        </div>
      </div>
    </div>
  );
}
