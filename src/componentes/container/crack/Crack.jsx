import React from "react";
import './crack.css';
import car1 from './img/1.png';
import car2 from './img/2.jpg';
import car3 from './img/3.jpg';

export function Crack (){
    return(
        <section className="car">
            <div className="car__container">
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
            </div>
        </section>
    )
}