import React from "react";
import './front.css';

export default function Center (){
    return(
        <div className="front">
            <div className="front__container">
                <div className="front__container--golpes">
                    <p className="front__container--p">Puerta delantera</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
                <div className="front__container--golpes">
                    <p className="front__container--p">Puerta trasera</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
                <div className="front__container--golpes">
                    <p className="front__container--p">Estribo derecho</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
                <div className="front__container--golpes">
                    <p className="front__container--p">Estribo izquierdo</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
                <div className="front__container--golpes">
                    <p className="front__container--p">Paral central</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
            </div>
        </div>
    )
}