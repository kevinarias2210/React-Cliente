import React from "react";
/* import { Link } from 'react-router-dom'; */
import './crack.css';
import car1 from './img/1.png';
import car2 from './img/2.jpg';
import car3 from './img/3.jpg';
import Front from "../front/Front";

export function Crack (){
    return(
        <section className="car">
            <h2 id="cracks" className="aside__container--h2">Tipo de daño</h2>
            <div className="car__container">
                <a href="/" className="car__container--items1">
                    <div className="car__container--title1">
                        <h1 className="car__container--h1p">Choque Frontal</h1>
                    </div>
                    <div className="car__container--parte1">
                        <div className="car__container--contColor">
                            <div className="car__container--color"></div>
                        </div>
                        <a href="/">
                            <img className="car__container--img" src={car1} alt="frontal" />
                        </a>
                    </div>
                </a>
                <a href="/" className="car__container--items1">
                    <div className="car__container--title2">
                        <h1 className="car__container--h1s">Choque central</h1>
                    </div>
                    <div className="car__container--parte1">
                        <div className="car__container--contColor">
                            <div className="car__container--color"></div>
                        </div>
                        <a href="/">
                            <img className="car__container--img" src={car2} alt="central" />
                        </a>
                    </div>
                </a>
                <a href="/" className="car__container--items1">
                    <div className="car__container--title3">
                        <h1 className="car__container--h1t">Choque trasera</h1>
                    </div>
                    <div className="car__container--parte1">
                        <div className="car__container--contColor">
                            <div className="car__container--color"></div>
                        </div>
                        <a href="/">
                            <img className="car__container--img" src={car3} alt="trasera" />
                        </a>
                    </div>
                </a>
            </div>
            <Front />
        </section>
    )
}