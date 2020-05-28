import React from 'react';

import './styles.css';

export default function SearchBox({ searchMethod, placeholder }) {
  return (
    <form className="search-container" onSubmit={searchMethod}>
      <div className="form-area">
        <input id="input-search-search-box" type="text" placeholder={placeholder} />
      </div>
      <div className="button-area">
        <button type="submit"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
      </div>
    </form>
  );
}
