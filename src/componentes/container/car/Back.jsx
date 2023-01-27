import React from "react";
import './front.css';

export default function Back (){
    return(
        <div className="front">
            <div className="front__container">
                <div className="front__container--golpes">
                    <p className="front__container--p">Paragolpes trasero</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
                <div className="front__container--golpes">
                    <p className="front__container--p">Panel trasero</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
                <div className="front__container--golpes">
                    <p className="front__container--p">Tapa de baul</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
                <div className="front__container--golpes">
                    <p className="front__container--p">Stop derecho</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
                <div className="front__container--golpes">
                    <p className="front__container--p">Stop izquierdo</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
            </div>
        </div>
    )
}