import React from "react";
import './sectionContacto.css';
import whatsapp from './img/whatsapp.png';
import gmail from './img/gmail.png';
import nequi from './img/nequi.png';
import daviplata from './img/daviplata.png';

export function SectionContacto () {
    return(
        <section className="section2">
            <div className="section2__container">
                <h2 className="aside__container--h2">Contactame</h2>
                <div className="section2__container--form">
                    <h2 className="section2__container--problem">Tipo de problema</h2>
                    <input className="section2__container--name" type="text" placeholder="Ingresa tu nombre"/> 
                    <input className="section2__container--problema" type="text" placeholder="Ingresa el tipo de problema de tu carro"/> 
                </div>
                <div className="section2__container--btns">
                    <button className="section2__container--bton">
                        <img src={whatsapp} alt="" />
                        Envíalo por whatsapp
                    </button>
                    <button className="section2__container--bton">
                        <img src={gmail} alt="" />
                        Envíalo por gmail
                    </button>
                </div>
                <h2 className="aside__container--h2">Puntos de pago</h2>
                <div className="section2__container--btns">
                    <button className="section2__container--pays">
                        <img src={nequi} alt="" />
                        Paga con nequi
                    </button>
                    <button className="section2__container--pays">
                        <img src={daviplata} alt="" />
                        Paga por daviplata
                    </button>
                </div>
            </div>
        </section>
    )
}