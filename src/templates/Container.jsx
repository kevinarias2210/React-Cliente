import React from 'react';
import Header from '../componentes/container/header/Header';
import Nav from '../componentes/container/nav/Nav'
import '../index.css';

const Container = ({ children }) => {
  return (
    <>
      <div className='contenedorGeneral'>{/* Contenedor donde solo se va a ver el header y el nav, despues con el children 
      se ve afectando a los otros componentes */}
        <Header />
        <Nav />
      </div>
      {children}
  </>
  )
}

export default Container;
