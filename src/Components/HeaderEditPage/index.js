import React from 'react';

import './styles.css';

export default function HeaderEditPage({ requestsPage, editPage, services, evaluation, configuration }) {
  return (
    <div className="header-edit">
      <div className="container-options">
        <div id="left-actions-mini-menu" className="left-actions">
          <a href="/pedidos" className={`tabnav ` + (requestsPage ? ('selected') : (''))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f3136" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <span>Pedidos</span>
          </a>
          <a href="/servicos" className={`tabnav ` + (services ? ('selected') : (''))}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f3136" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
            <span>Serviços</span>
          </a>
          <a href="/produtos" className={`tabnav ` + (editPage ? ('selected') : (''))}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f3136" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" /></svg>
            <span>Produtos</span>
          </a>
          <a href="/avaliacoes" className={`tabnav ` + (evaluation ? ('selected') : (''))}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f3136" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <span>Avaliações</span>
          </a>
          <a href="/configuracoes" className={`tabnav ` + (configuration ? ('selected') : (''))}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f3136" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            <span>Configurações</span>
          </a>
        </div>
      </div>
    </div>
  );
}
