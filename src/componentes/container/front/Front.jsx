import React from "react";
import './front.css';

export default function Front (){
    return(
        <div className="front">
            <div className="front__container">
                <div className="front__container--golpes">
                    <p className="front__container--p">Paragolpes delantero</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
                <div className="front__container--golpes">
                    <p className="front__container--p">Frontal metalico o plastico</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
                <div className="front__container--golpes">
                    <p className="front__container--p">Farola derecho</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
                <div className="front__container--golpes">
                    <p className="front__container--p">Farola izquierdo</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
                <div className="front__container--golpes">
                    <p className="front__container--p">Persiana</p>
                    <a className="front__container--a" href="/">Cotizar</a>
                </div>
            </div>
        </div>
    )
}