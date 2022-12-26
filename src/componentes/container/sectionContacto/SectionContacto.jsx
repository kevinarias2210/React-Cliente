import React from "react";
import './sectionContacto.css';

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
                    <button>Envialo por whatsapp</button>
                </div>
            </div>
        </section>
    )
}