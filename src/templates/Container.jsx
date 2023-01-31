import React from 'react';
import Header from '../componentes/container/header/Header';
import Nav from '../componentes/container/nav/Nav'
import '../index.css';

const Container = ({ children }) => {
  return (
    <>
      <div className='contenedorGeneral'>
        <Header />
        <Nav />
      </div>
      {children}
  </>
  )
}

export default Container;
