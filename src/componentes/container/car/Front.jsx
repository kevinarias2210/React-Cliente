import React from "react";
import { dataContact } from './dataContact';//Se importa
import './front.css';

export default function Front (){
    const front = dataContact.filter(item => item.type === 'front');//se guarda una constante donde se filtra los items por el tipo
    return(
        <div className="front">
            <div className="front__container">
                {front.map((item, index) => (//Luego se mapea el item y el index
                    <div key={`backContact-${index.toString()}`} className="front__container--golpes">
                        <p className="front__container--p">{item?.title || ''}</p>
                        <a className="front__container--a" href="/contacto">Cotizar</a>
                    </div>
                ))}
            </div>
        </div>
    )
}