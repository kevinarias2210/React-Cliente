import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Header} from './componentes/container/header/Header'
import {Nav} from './componentes/container/nav/Nav'
import {Section} from './componentes/container/section/Section'
import {Aside} from './componentes/container/aside/Aside'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {SectionContacto} from './componentes/container/sectionContacto/SectionContacto'
import {Home} from './componentes/container/casa/Home'
import {Crack} from './componentes/container/crack/Crack'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='contenedorGeneral'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/contact' element={<SectionContacto />}></Route>
        </Routes>
      </BrowserRouter>
      <Nav />
    </div>
    <Section />
    <Aside />
    {/* <SectionContacto /> */}
    <Home />
    <Crack />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
