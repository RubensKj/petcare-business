import React, { useEffect } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import Footer from '../../Components/Footer';

import { isAuthenticated } from '../../Services/auth';

import './styles.css';

export default function Main(props) {

  useEffect(() => {
    if(isAuthenticated()) {
      props.history.push('/dashboard')
    }
  }, [props.history])

  return (
    <>
      <HeaderMainPage />
      <div className="container-content">

      </div>
      <Footer />
    </>
  );
}
