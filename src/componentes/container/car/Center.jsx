import React from "react";
import { dataContact } from './dataContact';
import './front.css';

export default function Center (){
    const center = dataContact.filter(item => item.type === 'center');
    return(
        <div className="front">
            <div className="front__container">
                {center.map((item, index) => (
                    <div key={`backContact-${index.toString()}`} className="front__container--golpes">
                        <p className="front__container--p">{item?.title || ''}</p>
                        <a className="front__container--a" href="/contacto">Cotizar</a>
                    </div>
                ))}
            </div>
        </div>
    )
}