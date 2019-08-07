import React from 'react';

import './styles.css';

export default function FixedBar() {

  function openSideBar() {
    let sideBar = document.querySelector("#sidebar-menu-left");
    let containerPage = document.querySelector(".container-page-sidebar");
    sideBar.classList.toggle("closedSidebar");
    containerPage.classList.toggle("container-page-sidebar-space");
  }

  return (
    <div className="container-fixed-bar">
      <div className="up-actions">
        <div className="btn-home">
          <button type="button" onClick={openSideBar}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
        </div>
        <div className="list-actions">
          <ul>
            <a href="/"><li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="arcs"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" /><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" /></svg></li></a>
            <a href="/pedidos"><li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg></li></a>
            <a href="/avaliacoes"><li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></li></a>
            <a href="/alterar-endereco"><li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg></li></a>
          </ul>
        </div>
      </div>
      <div className="setting-config">
        <a href="/configuracoes"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></a>
      </div>
      <div className="logout">
        <div className="logout-button" role="button"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3"/></svg></div>
      </div>
    </div>
  );
}
