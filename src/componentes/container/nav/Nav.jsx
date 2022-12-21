import React from "react";
import './nav.css';
import car from "./img/carro.jpg"
import person from "./img/latonero.jpeg"

export function Nav(){
    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__container--color"></div>
                <div className="nav__container--img">
                    <img className="nav__container--carro" src={car} alt="car" />
                </div>
                <div className="nav__container--latonero">
                    <div className="nav__container--person">
                        <img className="nav__container--tio" src={person} alt="" />
                    </div>
                    <div className="nav__container--parrafo">
                        <p className="nav__container--nombre">Jorge Duarte Galvis - Latonero</p>
                    </div>
                </div>
            </div>
            <div className="nav__navegation">
                <div className="nav__navegation--botton">
                    <button className="nav__navegation--boton">Mi perfil y mi trabajo</button>
                    <button className="nav__navegation--boton">Contactame</button>
                    <button className="nav__navegation--boton">Califica mi trabajo</button>
                </div>
            </div>
        </nav>
    )
}