import React from "react";
import { Link } from "react-scroll";
import './nav.css';
import { SectionContacto } from "../sectionContacto/SectionContacto";
import car from "./img/carro.jpg";
import person from "./img/latonero.jpeg";

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
                    <Link to="asides" spy={true} smooth={true} offset={-20} duration={500} className="nav__navegation--boton">Mi perfil y mi trabajo</Link>
                    <Link to="contact" className="nav__navegation--boton">Contactame</Link>
                    <Link to="cracks" spy={true} smooth={true} offset={-150} duration={500} className="nav__navegation--boton" href="/">Tipo de choque</Link>
                    {/* <a className="nav__navegation--boton" href="#aside">Califica mi trabajo</a> */}
                </div>
            </div>
            <SectionContacto />
        </nav>
    )
}