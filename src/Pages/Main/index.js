import React from 'react';

import SideBar from '../../Components/SideBar';

import './styles.css';

export default function Main() {
  return (
    <>
      <SideBar />
      <div className="container">
        <h1>Main</h1>
      </div>
    </>
  );
}
